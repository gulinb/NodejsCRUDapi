const express = require('express');
const router = express.Router();

const coliereController =   require('../controllers/coliere.controller');

// Retrieve all colieres
router.get('/', coliereController.findAll);

// Create a new coliere
router.post('/', coliereController.create);

// Retrieve a single coliere with id
router.get('/:id', coliereController.findById);

// Update a coliere with id
router.put('/:id', coliereController.update);

// Delete a coliere with id
router.delete('/:id', coliereController.delete);

module.exports = router;