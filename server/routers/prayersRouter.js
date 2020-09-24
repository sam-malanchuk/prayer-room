const express = require('express');

const Prayers = require('./prayersModel.js')

const router = express.Router();

// root route returns a list of all the prayers for the person
router.get('/:id', (req, res) => {
    const { id } = req.params;

    Prayers.getAll(id)
        .then(prayers => {
            res.status(200).json(prayers);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to get a list of the prayers"});
        });
});

// route for adding a new prayer
router.post('/', (req, res) => {
    // get the new user details from the request body object
    var prayer = req.body;

    Prayers.add(prayer)
        .then(prayer => {
            res.status(201).json(prayer);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to add a new prayer"});
        })
})

// route to update prayer by id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Prayers.update(id, changes)
        .then(updated => {
            if(updated) {
                res.status(201).json({ message: 'Prayer has been updated' });
            } else {
                res.status(500).json({ message: 'Prayer ID not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update prayer' });
        });
});

// route to delete prayer by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Prayers.remove(id)
    .then(count => {
        if (count) {
            res.json({ removed: count });
        } else {
            res.status(404).json({ message: 'Could not find prayer with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete prayer' });
    });
});

module.exports = router;