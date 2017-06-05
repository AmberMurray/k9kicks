exports.up = (knex => {
  return knex.schema.createTable('orders', (table) => {
    table.increments();
    table.integer('customer_id').notNullable();
    table.string('order_date').notNullable();
    table.string('ship_date').notNullable();
    table.string('ship_address_line1').notNullable();
    table.string('ship_address_line2');
    table.string('ship_city').notNullable();
    table.varchar('ship_state', 2).notNullable();
    table.varchar('ship_zipcode',10).notNullable();
    table.varchar('ship_phone_number', 15).notNullable();
    table.varchar('ship_email', 50).notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('orders');
});
