exports.up = (knex => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.integer('role_id').notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('users');
});
