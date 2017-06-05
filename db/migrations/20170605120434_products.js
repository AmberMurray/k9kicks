exports.up = (knex => {
  return knex.schema.createTable('products', (table) => {
    table.increments();
    table.integer('category_id').notNullable();
    table.integer('promotion_id').notNullable();
    table.integer('review_id');
    table.string('name').notNullable();
    table.decimal('price').notNullable();
    table.integer('quantity').notNullable();
    table.text('description').notNullable();
    table.text('image_url').notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('products');
});
