exports.seed = (knex) => {
  return knex('categories').del()
  .then(() => {
    return knex('categories').insert([{
      id:1,
      name: 'Seasonal'
      }, {
      id:2,
      name: 'Fashion'
      }, {
      id:3,
      name: 'Athletic'
      },{
      id:4,
      name: 'Casual'
    }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories));"
    );
  });
};
