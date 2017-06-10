exports.up = (knex => {
  return knex.schema.createTable('categories', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.timestamps(true, true)
  })
})

exports.down = (knex => {
  return knex.schema.dropTable('categories')
})
