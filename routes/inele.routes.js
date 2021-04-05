const express = require('express');
const router = express.Router();

const ineleController =   require('../controllers/inele.controller');

// Retrieve all ineles
router.get('/', ineleController.findAll);

// Create a new inele
router.post('/', ineleController.create);

// Retrieve a single inele with id
router.get('/:id', ineleController.findById);

// Update a inele with id
router.put('/:id', ineleController.update);

// Delete a inele with id
router.delete('/:id', ineleController.delete);

module.exports = router;