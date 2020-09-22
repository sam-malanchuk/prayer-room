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
