
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people_groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('people_groups').insert([
        {person_id: 1, group_id: 4},
        {person_id: 3, group_id: 1},
        {person_id: 4, group_id: 1},
        {person_id: 2, group_id: 3},
        {person_id: 6, group_id: 5},
        {person_id: 5, group_id: 2}
      ]);
    });
};
