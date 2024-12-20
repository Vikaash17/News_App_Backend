const express = require('express');
const router = express.Router();
const { getAllNews, addNews } = require('../controllers/newsController');

// Get all news
router.get('/', getAllNews);

// Add news
router.post('/', addNews);

module.exports = router;