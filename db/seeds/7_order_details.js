exports.seed = (knex) => {
  return knex('order_details').del()
  .then(() => {
    return knex('order_details').insert([{
      order_id: 1,
      product_id: 1,
      quantity: 1
    },
    {
      order_id: 2,
      product_id: 2,
      quantity: 2
    },
    {
      order_id: 3,
      product_id: 3,
      quantity: 2
    },
    {
      order_id: 4,
      product_id: 5,
      quantity: 1
    },
    {
      order_id: 5,
      product_id: 6,
      quantity: 4
    }])
  })
}
