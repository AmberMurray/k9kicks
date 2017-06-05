exports.seed = (knex) => {
  return knex('orders').del()
  .then(() => {
    return knex('orders').insert([{
      id: 1,
      customer_id: 1,
      order_date: '05-01-2017',
      ship_date: '05-05-2017',
      ship_address_line1: '123 Main Street',
      ship_address_line2: '',
      ship_city: 'Seattle',
      ship_state: 'WA',
      ship_zipcode: '98126',
      ship_phone_number: '206-555-1111',
      ship_email: 'ilovecorgis@gmail.com'
      }, {
      id:2,
      customer_id: 2,
      order_date: '06-01-2017',
      ship_date: '06-05-2017',
      ship_address_line1: '224 Elm Street',
      ship_address_line2: '',
      ship_city: 'Spokane',
      ship_state: 'WA',
      ship_zipcode: '98245',
      ship_phone_number: '206-555-2222',
      ship_email: 'ilovegreyhounds@gmail.com'
      }, {
      id:3,
      customer_id: 3,
      order_date: '06-02-2017',
      ship_date: '06-15-2017',
      ship_address_line1: '334 Oak Street',
      ship_address_line2: '',
      ship_city: 'Yakima',
      ship_state: 'WA',
      ship_zipcode: '98378',
      ship_phone_number: '206-555-3333',
      ship_email: 'ilovefrenchies@gmail.com'
    }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders));"
    );
  });
};
