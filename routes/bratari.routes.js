const express = require('express');
const router = express.Router();

const bratariController =   require('../controllers/bratari.controller');

// Retrieve all brataris
router.get('/', bratariController.findAll);

// Create a new bratari
router.post('/', bratariController.create);

// Retrieve a single bratari with id
router.get('/:id', bratariController.findById);

// Update a bratari with id
router.put('/:id', bratariController.update);

// Delete a bratari with id
router.delete('/:id', bratariController.delete);

module.exports = router;