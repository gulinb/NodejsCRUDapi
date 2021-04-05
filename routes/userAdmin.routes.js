const express = require('express');
const router = express.Router();

const userAdminController =   require('../controllers/userAdmin.controller');

// Retrieve user
router.post('/', userAdminController.findUser);

module.exports = router;