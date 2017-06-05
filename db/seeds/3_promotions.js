exports.seed = (knex) => {
  return knex('promotions').del()
  .then(() => {
    return knex('promotions').insert([{
      id:1,
      name: 'Seasonal',
      rate: 20
      }, {
      id:2,
      name: 'Clearance',
      rate: 50
      }, {
      id:3,
      name: 'Holiday',
      rate: 25
      },{
      id:4,
      name: 'Military',
      rate: 10
      },{
      id:5,
      name: 'None',
      rate: 0
    }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('promotions_id_seq', (SELECT MAX(id) FROM promotions));"
    );
  });
};
