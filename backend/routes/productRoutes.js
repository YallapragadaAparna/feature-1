const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to get relevant products based on customer browsing history
router.get('/relevant/:id', productController.getRelevantProductsByCustomerId);

module.exports = router;

