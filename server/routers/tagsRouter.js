const express = require('express');

const Tags = require('./tagsModel.js');

const router = express.Router();

// route for getting all the tags
router.get('/', (req, res) => {
    Tags.listTags()
        .then(tags => {
            res.status(201).json(tags);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to get tags"});
        })
})

// route for getting all the tags by user ID
router.get('/:id', (req, res) => {
    // get the ID from the url
    const { id } = req.params;

    Tags.listUsersTags(id)
        .then(tag => {
            res.status(201).json(tag);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to get tag by ID"});
        })
})

// route for adding a new tag
router.post('/', (req, res) => {
    // get the tag name from the request body object
    const tag = req.body;

    Tags.add(tag)
        .then(tag => {
            res.status(201).json(tag);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to create new tag"});
        })
})

// route to delete tag by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Tags.remove(id)
    .then(count => {
        if (count) {
            res.json({ removed: count });
        } else {
            res.status(404).json({ message: 'Could not find tag with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete tag' });
    });
});

module.exports = router;