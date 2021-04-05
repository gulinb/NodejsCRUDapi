const express = require('express');
const router = express.Router();

const pandantiveController =   require('../controllers/pandantive.controller');

// Retrieve all pandantives
router.get('/', pandantiveController.findAll);

// Create a new pandantive
router.post('/', pandantiveController.create);

// Retrieve a single pandantive with id
router.get('/:id', pandantiveController.findById);

// Update a pandantive with id
router.put('/:id', pandantiveController.update);

// Delete a pandantive with id
router.delete('/:id', pandantiveController.delete);

module.exports = router;