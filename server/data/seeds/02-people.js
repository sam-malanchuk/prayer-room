
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {name: 'Wilson Hassan', added_date: '09/17/2020', prayed_toggle: 0, user_id: 1},
        {name: 'Rhyley Buckner', added_date: '09/17/2020', prayed_toggle: 0, user_id: 2},
        {name: 'Alivia Leonard', description: 'BFF', added_date: '09/17/2020', prayed_toggle: 0, user_id: 1},
        {name: 'Pheobe Smith', added_date: '09/17/2020', prayed_toggle: 0, user_id: 1},
        {name: 'Samiya Whitfield', description: 'Sister in-law', added_date: '09/17/2020', prayed_toggle: 0, user_id: 2},
        {name: 'Clarence Sawyer', added_date: '09/17/2020', prayed_toggle: 0, user_id: 2},
      ]);
    });
};