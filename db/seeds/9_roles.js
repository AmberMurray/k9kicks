exports.seed = (knex) => {
  return knex('roles').del()
  .then(() => {
    return knex('roles').insert([{
      id:1,
      name: 'admin'
    },
    {
      id:2,
      name: 'customer'
    }])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('roles_id_seq', (SELECT MAX(id) FROM roles))"
    )
  })
}
