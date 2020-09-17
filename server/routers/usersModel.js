// import the knex database connection 
const db = require('../data/db-config.js');

// export model functions
module.exports = {
    listUsers,
    getById,
    add,
    update,
    remove
}

// return a list of all the users
function listUsers() {
    return db('users');
}

// return information about user by the given id
function getById(id) {
    return db('users').where({id}).first();
}

// insert a new user into the database
function add(user) {
    return db('users').insert(user)
        .then(ids => {
            const id = ids[0];
            return db('users').where({id}).first();
        });
}

// update a user's information
function update(id, changes) {
    return db('users').where({ id }).update(changes);
}

// delete user by id
function remove(id) {
    return db('users').where({ id }).del();
}