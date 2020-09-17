// import the knex database connection 
const db = require('../data/db-config.js');

// export model functions
module.exports = {
    getAll,
    togglePrayed,
    add,
    update,
    remove
}

// return a list of all people with user ID
function getAll(id) {
    return db('people').where({'user_id': id});
}

// toggle the prayed option by specifc person id
function togglePrayed(id) {
    return db('people').where({id}).first()
        .then(person => {
            const newToggle = !person.prayed_toggle;
            return db('people').where({id}).update({prayed_toggle: newToggle});
        })
}

// insert a new person into the database
function add(person) {
    return db('people').insert(person)
        .then(ids => {
            const id = ids[0];
            return db('people').where({id}).first();
        });
}

// update a person's information
function update(id, changes) {
    return db('people').where({ id }).update(changes);
}

// delete person by id
function remove(id) {
    return db('people').where({ id }).del();
}