const express = require('express');
const router = express.Router();
const { getCustomer } = require('../controllers/customerController');

router.get('/:id', getCustomer);

module.exports = router;
