const express = require('express');
const router = express.Router();

const decoratiuniController =   require('../controllers/decoratiuni.controller');

// Retrieve all decoratiunis
router.get('/', decoratiuniController.findAll);

// Create a new decoratiuni
router.post('/', decoratiuniController.create);

// Retrieve a single decoratiuni with id
router.get('/:id', decoratiuniController.findById);

// Update a decoratiuni with id
router.put('/:id', decoratiuniController.update);

// Delete a decoratiuni with id
router.delete('/:id', decoratiuniController.delete);

module.exports = router;