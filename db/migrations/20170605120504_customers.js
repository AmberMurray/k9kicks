exports.up = (knex => {
  return knex.schema.createTable('customers', (table) => {
    table.increments();
    table.integer('user_id').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('address_line1').notNullable();
    table.string('address_line2');
    table.string('city').notNullable();
    table.varchar('state', 2).notNullable();
    table.varchar('zipcode',10).notNullable();
    table.varchar('phone_number', 15).notNullable();
    table.varchar('email', 50).notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('customers');
});
