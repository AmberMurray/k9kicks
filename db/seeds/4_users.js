exports.seed = (knex) => {
  return knex('users').del()
  .then(() => {
    return knex('users').insert([{
      id:1,
      username: 'admin',
      password: 'admin',
      role_id: 1
    },
    {
      id:2,
      username: 'betty',
      password: 'betty',
      role_id: 2
    },
    {
      id:3,
      username: 'erica',
      password: 'erica',
      role_id: 2
    },
    {
      id:4,
      username: 'amber',
      password: 'amber',
      role_id: 2
    }
  ])
})
.then(() => {
  return knex.raw(
    "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))"
  )
})
}
