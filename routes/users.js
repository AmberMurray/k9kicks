const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

router.get('/', (req, res, next) => {
  knex('users')
    .where(username, password)
    .then(reviews => res.json(reviews))
    .catch(err => next(err));
});
