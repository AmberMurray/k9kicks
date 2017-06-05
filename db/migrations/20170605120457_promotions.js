exports.up = (knex => {
  return knex.schema.createTable('promotions', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.integer('rate').notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('promotions');
});
