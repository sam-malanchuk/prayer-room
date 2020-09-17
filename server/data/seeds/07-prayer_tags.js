
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prayer_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('prayer_tags').insert([
        {prayer_id: 6, tag_id: 5},
        {prayer_id: 1, tag_id: 3},
        {prayer_id: 8, tag_id: 3},
        {prayer_id: 5, tag_id: 1},
        {prayer_id: 7, tag_id: 1},
        {prayer_id: 11, tag_id: 1},
        {prayer_id: 12, tag_id: 2},
        {prayer_id: 13, tag_id: 4}
      ]);
    });
};
