const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

router.get('/:id/reviews', (req, res, next) => {
  knex('reviews')
    .where({product_id: req.params.post_id})
    .then(reviews => res.json(reviews))
    .catch(err => next(err));
});

router.post('/:id/reviews', (req, res, next) => {
  knex('reviews')
    .insert({product_id: req.params.id,  username:'erica' , content: req.body.content, rating: req.body.rating})
    .returning('*')
    .then(reviews => res.json(reviews[0]))
    .catch(err => next(err));
});

router.patch('/:id/reviews/', (req, res, next) => {
  knex('reviews')
    .update({ content: req.body.content})
    .where({product_id: req.params.id})
    .returning('*')
    .then(reviews => res.json(reviews[0]))
    .catch(err => next(err));
});

router.delete('/:id/reviews', (req, res, next) => {
  knex('reviews')
    .del()
    .where({id: req.params.id})
    .then(() => res.end())
    .catch(err => next(err));
});

module.exports = router;
