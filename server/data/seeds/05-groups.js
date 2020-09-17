
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {name: 'Friends', user_id: 1},
        {name: 'Family', user_id: 2},
        {name: 'Friends', user_id: 2},
        {name: 'School', user_id: 1},
        {name: 'Work', user_id: 2}
      ]);
    });
};
