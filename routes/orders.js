const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

router.get('/:id/orders', (req, res, next) => {
  knex('orders')
  innerJoin('order_details', 'orders.id', 'order_details.order_id' )
  .where({customer_id: req.params.id})
  .then(orders => res.json(orders))
  .catch(err => next(err))
})

router.post('/:id/orders', (req, res, next) => {
  let order = {
    customer_id: req.params.id,
    order_date: req.body.order_date,
    ship_date: req.body.ship_date,
    ship_address_line1: req.body.ship_address_line1,
    ship_address_line2: req.body.ship_address_line2,
    ship_city: req.body.ship_city,
    ship_state: req.body.ship_state,
    ship_zipcode: req.body.ship_zipcode,
    ship_phone_number: req.body.ship_phone_number,
    ship_email: req.body.ship_email }

    knex('orders')
    .insert({ order })
    .returning('*')
    .then(order => {
      let order_details = req.body.order_details.map((item) =>{
        item.order_id = order.id
        return item
      })
      return knex('order_details')
      .insert(order_details)
      .then(() => {
        res.json(order)
      })
    })
    .catch(err => next(err))
  })

  module.exports = router
