// import the knex database connection 
const db = require('../data/db-config.js');

// export model functions
module.exports = {
    listTags,
    listUsersTags,
    getById,
    add,
    remove
}

// return a list of all the tags
function listTags() {
    return db('tags');
}

// return a list of all the tags of a specific user
function listUsersTags(user_id) {
    return db('tags').where({user_id}).first();
}

// return tag name by id
function getById(id) {
    return db('tags').where({id}).first();
}

// add a new tag
function add(tag) {
    return db('tags').insert(tag)
        .then(ids => {
            const id = ids[0];
            return db('tags').where({id}).first();
        });
}

// delete tag by id
function remove(id) {
    return db('tags').where({ id }).del();
}