const express = require('express');

const People = require('./peopleModel.js');

const router = express.Router();

// root route returns a list of all people under user's account
router.get('/:id', (req, res) => {
    const { id } = req.params;

    People.getAll(id)
        .then(ppl => {
            res.status(200).json(ppl);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to get a list of people"});
        });
});

// route to toggle the prayed value
router.put('/:id', (req, res) => {
    const { id } = req.params;

    People.togglePrayed(id)
        .then(updated => {
            if(updated) {
                res.status(201).json({ message: 'Person prayed toggle has been updated' });
            } else {
                res.status(500).json({ message: 'Person ID not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update person pray toggle' });
        });
})

module.exports = router;