exports.seed = (knex) => {
  return knex('customers').del()
  .then(() => {
    return knex('customers').insert([{
        id: 1,
        user_id: 2,
        first_name: 'Betty',
        last_name: 'Chempananical',
        address_line1: '111 Magical Lane',
        address_line2: '',
        city: 'Emerald City',
        state: 'WA',
        zipcode: '98008',
        phone_number: '1233456789',
        email: 'bettymariam@gmail.com'
      }, {
        id: 2,
        user_id: 3,
        first_name: 'Erica',
        last_name: 'Rottman',
        address_line1: '222 Reality St',
        address_line2: '',
        city: 'Emerald City',
        state: 'WA',
        zipcode: '98008',
        phone_number: '3233456789',
        email: 'erica@erica.com'
        }, {
        id: 3,
        user_id: 4,
        first_name: 'Amber',
        last_name: 'Murray',
        address_line1: '333 Sarcastic Ave',
        address_line2: '',
        city: 'Emerald City',
        state: 'WA',
        zipcode: '98008',
        phone_number: '4233456789',
        email: 'amber@amber.com'
      }
    ]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('customers_id_seq', (SELECT MAX(id) FROM customers));"
    );
  });
};
