const express = require('express');
const router = express.Router();

const produseController =   require('../controllers/produse.controller');

// Retrieve all produses
router.get('/', produseController.findAll);

// Create a new produse
router.post('/', produseController.create);

// Retrieve a single produse with id
router.get('/:collection', produseController.findByCategory);

// Retrieve a single produse with id
router.get('/:collection/:id', produseController.findById);

// Update a produse with id
router.put('/:id', produseController.update);

// Delete a produse with id
router.delete('/:id', produseController.delete);

module.exports = router;