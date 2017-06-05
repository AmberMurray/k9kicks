const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');

router.get('/', (req, res, next) => {
  knex('products')
    .innerJoin('promotions', 'promotions.id', 'products.promotion_id')
    .innerJoin('categories', 'categories.id', 'products.category_id')
    .select('products.id as pid', 'category_id','categories.name as category_name','products.name as product_name','price','description','quantity', 'promotions.name as promotion_name','rate','image_url')
    .then(products => {
      return knex('reviews')
        .whereIn('reviews.product_id', products.map(p => p.pid))
        .then((reviews) => {
          const reviewsByPId = reviews.reduce((result, review) => {
            result[review.product_id] = result[review.product_id] || [];
            result[review.product_id].push(review);
            return result;
          }, {});
          products.forEach(product => {
            product.reviews = reviewsByPId[product.pid] || [];
          });
        res.json(products);
      });
    })
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  knex('products')
    .innerJoin('promotions', 'promotions.id', 'products.promotion_id')
    .innerJoin('categories', 'categories.id', 'products.category_id')
    .select('products.id as product_id', 'category_id','categories.name as category_name','products.name as product_name','price','description','quantity', 'promotions.name as promotion_name','rate','image_url')
    .where('products.id', req.params.id)
    .then(product => {
      return knex('reviews')
        .select('reviews.id as review_id', 'username', 'content','rating')
        .where('reviews.product_id', req.params.id)
        .then((reviews) => {
          product.push(reviews)
          res.json(product);
        });
    })
    .catch(err => next(err));
});

module.exports = router;
