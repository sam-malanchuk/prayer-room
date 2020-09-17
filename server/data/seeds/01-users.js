
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Fynn', email: 'fynnmcgee@gmail.com'},
        {name: 'Keisha', email: 'keishawallace@gmail.com'}
      ]);
    });
};
