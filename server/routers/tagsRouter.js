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

module.exports = router;