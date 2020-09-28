// import the knex database connection 
const db = require('../data/db-config.js');

// export model functions
module.exports = {
    listTags,
    getById,
    add,
    remove
}

// return a list of all the tags
function listTags() {
    return db('tags');
}

// return tag name by id
function getById(id) {
    return db('tags').where({id}).first();
}