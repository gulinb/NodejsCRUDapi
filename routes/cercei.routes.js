const express = require('express');
const router = express.Router();

const cerceiController =   require('../controllers/cercei.controller');

// Retrieve all cerceis
router.get('/', cerceiController.findAll);

// Create a new cercei
router.post('/', cerceiController.create);

// Retrieve a single cercei with id
router.get('/:id', cerceiController.findById);

// Update a cercei with id
router.put('/:id', cerceiController.update);

// Delete a cercei with id
router.delete('/:id', cerceiController.delete);

module.exports = router;