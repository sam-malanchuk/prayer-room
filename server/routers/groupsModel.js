// import the knex database connection 
const db = require('../data/db-config.js');

// export model functions
module.exports = {
    listGroups,
    listUsersGroups,
    getById,
    add,
    remove
}

// return a list of all the groups
function listGroups() {
    return db('groups');
}

// return a list of all the groups of a specific user
function listUsersGroups(user_id) {
    return db('groups').where({user_id}).first();
}

// return group name by id
function getById(id) {
    return db('groups').where({id}).first();
}

// add a new group
function add(group) {
    return db('groups').insert(group)
        .then(ids => {
            const id = ids[0];
            return db('groups').where({id}).first();
        });
}

// delete group by id
function remove(id) {
    return db('groups').where({ id }).del();
}