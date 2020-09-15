// import the knex database connection 
const db = require('../data/db-config.js');

// export model functions
module.exports = {
    listUsers,
    // getById,
    // add,
    // update,
    // remove
}

// return a list of all the users
function listUsers() {
    return db('users');
}