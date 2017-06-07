const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');
console.log("in users route");
//include bcrypt in authentication
router.get('/', (req, res, next) => {
  const user = { username : req.query.username,
                 password: req.query.password }
  knex('users')
    .where({user})
    .then(user => res.json(user))
    .catch(err => next(err));
});

//customer details
router.get('/:id', (req, res, next) => {
  knex('customers')
    .where('user_id', req.params.id)
    .then(customer => res.json(customer))
    .catch(err => next(err));
});

//adding a new customer
router.post('/', (req, res, next) => {
  let new_user = {
    username: req.body.username,
    password: req.body.password,
    role_id: 2
  }

  knex('users')
    .insert({ new_user })
    .returning('*')
    .then(user => {
      let new_customer = {
        user_id: user.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address_line1: req.body.address_line1,
        address_line2: req.body.address_line2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        phone_number: req.body.phone_number,
        email: req.body.email };

      return knex('customers')
        .insert({new_customer})
        .returning('*')
        .then(customer => {
          res.json(customer)
        })
    })
    .catch(err => next(err));
});

//edit customer details
router.patch('/:id', (req, res, next) => {
  let user = {
    username: req.body.username,
    password: req.body.password,
    role_id: 2
  }

  knex('users')
    .update({ user })
    .where({id: req.params.id})
    .returning('*')
    .then(user => {
      let customer = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address_line1: req.body.address_line1,
        address_line2: req.body.address_line2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        phone_number: req.body.phone_number,
        email: req.body.email };

      return knex('customers')
        .update({customer})
        .where({user_id: user.id})
        .returning('*')
        .then(customer => {
          res.json(customer)
        })
    })
    .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
  knex('users')
    .del()
    .where({id: req.params.id})
    .then(() => {
      return knex('customers')
        .del()
        .where({user_id: req.params.id})
    })
    .then(() => res.end())
    .catch(err => next(err));
});

module.exports = router;
