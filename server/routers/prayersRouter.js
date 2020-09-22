// import the knex database connection 
const db = require('../data/db-config.js');

// export model functions
module.exports = {
    getAll,
    add,
    update,
    remove
}

// return a list of all prayers with people ID
function getAll(id) {
    return db('prayers').where({'person_id': id});
}

// insert a new prayer into the database
function add(prayer) {
    return db('prayers').insert(prayer)
        .then(ids => {
            const id = ids[0];
            return db('prayers').where({id}).first();
        });
}

// update a prayer
function update(id, changes) {
    return db('prayers').where({ id }).update(changes);
}

// delete prayer by id
function remove(id) {
    return db('prayers').where({ id }).del();
}