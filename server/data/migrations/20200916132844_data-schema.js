
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments('id');
        tbl.string('name').notNullable();
        tbl.string('email').notNullable();
    })
    .createTable('people', tbl => {
        tbl.increments('id');
        tbl.string('name').notNullable();
        tbl.string('description');
        tbl.date('added_date');
        tbl.boolean('prayed_toggle');
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('prayers', tbl => {
        tbl.increments('id');
        tbl.string('name').notNullable();
        tbl.integer('person_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('people')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('tags', tbl => {
        tbl.increments('id');
        tbl.string('name').notNullable();
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('groups', tbl => {
        tbl.increments('id');
        tbl.string('name').notNullable();
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('people_groups', tbl => {
        tbl.integer('group_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('groups')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('person_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('people')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('prayer_tags', tbl => {
        tbl.integer('prayer_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('prayers')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('tag_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('tags')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  
};
