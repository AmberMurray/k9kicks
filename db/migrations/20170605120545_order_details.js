exports.up = (knex => {
  return knex.schema.createTable('order_details', (table) => {
    table.integer('order_id').notNullable()
    table.integer('product_id').notNullable()
    table.integer('quantity')
    table.timestamps(true, true)
  })
})

exports.down = (knex => {
  return knex.schema.dropTable('order_details')
})
