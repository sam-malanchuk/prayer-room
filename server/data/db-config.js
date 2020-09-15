// require the knex package
const knex = require('knex');

// get the knex configurations
const config = require('../knexfile.js');

// export
module.exports = knex(config.development);