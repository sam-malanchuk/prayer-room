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
router.put('/pray/:id', (req, res) => {
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

// route for adding a new person
router.post('/', (req, res) => {
    // get the new user details from the request body object
    var person = req.body;
    var createDate = (new Date()).toLocaleDateString();

    person = {
        ...person,
        added_date: createDate,
        prayed_toggle: 0
    }

    People.add(person)
        .then(person => {
            res.status(201).json(person);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to add a new person"});
        })
})

// route to update person information by id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    People.update(id, changes)
        .then(updated => {
            if(updated) {
                res.status(201).json({ message: 'Person has been updated' });
            } else {
                res.status(500).json({ message: 'Person ID not found' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update person' });
        });
});

// route to delete person by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    People.remove(id)
    .then(count => {
        if (count) {
            res.json({ removed: count });
        } else {
            res.status(404).json({ message: 'Could not find person with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete person' });
    });
});

module.exports = router;