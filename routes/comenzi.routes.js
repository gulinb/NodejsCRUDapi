const express = require('express');
const router = express.Router();

const comenziController =   require('../controllers/comenzi.controller');

// Retrieve all comenzis
router.get('/', comenziController.findAll);

// Create a new comenzi
router.post('/', comenziController.create);

// Retrieve a single comenzi with id
router.get('/:id', comenziController.findById);

// Retrieve a single comenzi with name and total
router.get('/:nume/:prenume/:total', comenziController.findByNameAndTotal);

// Update a comenzi with id
router.put('/:id', comenziController.update);

// Delete a comenzi with id
router.delete('/:id', comenziController.delete);

module.exports = router;