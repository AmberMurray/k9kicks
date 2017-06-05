exports.up = (knex => {
  return knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.integer('product_id').notNullable();
    table.string('username').notNullable();
    table.text('content');
    table.integer('rating').notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('reviews');
});
