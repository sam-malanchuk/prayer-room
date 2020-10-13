const express = require('express');

const Groups = require('./groupsModel.js');

const router = express.Router();

// route for getting all the groups
router.get('/', (req, res) => {
    Groups.listGroups()
        .then(groups => {
            res.status(201).json(groups);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to get groups"});
        })
})

// route for getting all the groups by user ID
router.get('/:id', (req, res) => {
    // get the ID from the url
    const { id } = req.params;

    Groups.listUsersGroups(id)
        .then(group => {
            res.status(201).json(group);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to get group by ID"});
        })
})

// route for adding a new group
router.post('/', (req, res) => {
    // get the group name from the request body object
    const group = req.body;

    Groups.add(group)
        .then(group => {
            res.status(201).json(group);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to create new group"});
        })
})

// route to delete group by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Groups.remove(id)
    .then(count => {
        if (count) {
            res.json({ removed: count });
        } else {
            res.status(404).json({ message: 'Could not find group with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete group' });
    });
});

module.exports = router;