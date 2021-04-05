const express = require('express');
const router = express.Router();

const broseController =   require('../controllers/brose.controller');

// Retrieve all broses
router.get('/', broseController.findAll);

// Create a new brose
router.post('/', broseController.create);

// Retrieve a single brose with id
router.get('/:id', broseController.findById);

// Update a brose with id
router.put('/:id', broseController.update);

// Delete a brose with id
router.delete('/:id', broseController.delete);

module.exports = router;