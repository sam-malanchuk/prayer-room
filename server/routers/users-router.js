const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();

// users root routes returns a list of all the users
router.get('/', (req, res) => {
    Users.listUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to get a list of the users"});
        })
});

// route for getting a user by id
router.get('/:id', (req, res) => {
    // get the ID from the url
    const { id } = req.params;

    Users.getById(id)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to get user by ID"});
        })
})

// route for adding a new user
router.post('/', (req, res) => {
    // get the new user details from the request body object
    const user = req.body;

    Users.add(user)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to create new user"});
        })
})

module.exports = router;