exports.seed = (knex) => {
  return knex('reviews').del()
  .then(() => {
    return knex('reviews').insert([{
        id: 1,
        product_id: 1,
        username: 'betty',
        content: 'I love this product!',
        rating: 4
      }, {
        id: 2,
        product_id: 2,
        username: 'erica',
        content: 'I am disappointed with this purchase. The color shown in the picture was way off and its too big on my puppy.',
        rating: 1
      }, {
        id: 3,
        product_id: 3,
        username: 'amber',
        content: 'These shoes are very cute and durable!',
        rating: 5
      },{
        id: 4,
        product_id: 4,
        username: 'Betty',
        content: 'I love this product!',
        rating: 4
      },{
        id: 5,
        product_id: 5,
        username: 'amber',
        content: 'I love the color and fit but they are not well made.',
        rating: 3
      },{
        id: 6,
        product_id: 1,
        username: 'erica',
        content: 'These are awesome!',
        rating: 5
      }
    ]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews));"
    );
  });
};
