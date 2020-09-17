
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prayers').del()
    .then(function () {
      // Inserts seed entries
      return knex('prayers').insert([
        {name: 'Walk with Christ', person_id: 4},
        {name: 'Relationship with Tom', person_id: 5},
        {name: 'Parents Sick', person_id: 6},
        {name: 'Walk with Christ', person_id: 2},
        {name: 'Repair Car', person_id: 4},
        {name: 'Career Decision', person_id: 1},
        {name: 'Pregnancy', person_id: 3},
        {name: 'Walk with Christ', person_id: 3},
        {name: 'Feeling Sick', person_id: 2},
        {name: 'Walk with Christ', person_id: 5},
        {name: 'Moving to NY', person_id: 4},
        {name: 'School', person_id: 2},
        {name: 'Audition', person_id: 6}
      ]);
    });
};
