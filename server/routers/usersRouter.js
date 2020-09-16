const express = require('express');

const Users = require('./usersModel.js');

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

// route to update user information by id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Users.update(id, changes)
    .then(updated => {
        if(updated) {
            res.status(201).json({ message: 'User has been updated' });
        } else {
            res.status(500).json({ message: 'User ID not found' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to update user' });
    });
});

// route to delete user by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Users.remove(id)
    .then(count => {
        if (count) {
            res.json({ removed: count });
        } else {
            res.status(404).json({ message: 'Could not find user with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete user' });
    });
});

module.exports = router;