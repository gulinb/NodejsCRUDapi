const express = require('express');
const router = express.Router();

const comenziProduseController =   require('../controllers/comenziProduse.controller');

// Retrieve all comenziProduses
router.get('/', comenziProduseController.findAll);

// Create a new comenziProduse
router.post('/', comenziProduseController.create);

// Retrieve a single comenziProduse with id
router.get('/:id', comenziProduseController.findById);

// Update a comenziProduse with id
router.put('/:id', comenziProduseController.update);

// Delete a comenziProduse with id
router.delete('/:id', comenziProduseController.delete);

module.exports = router;