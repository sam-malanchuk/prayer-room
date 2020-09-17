
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {name: 'Life', user_id: 1},
        {name: 'School', user_id: 2},
        {name: 'Christ', user_id: 1},
        {name: 'Career', user_id: 2},
        {name: 'Education', user_id: 1}
      ]);
    });
};
