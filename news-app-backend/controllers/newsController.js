const News = require('../models/newsModel');

// Get all news
exports.getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add news
exports.addNews = async (req, res) => {
    const { title, content, author } = req.body;
    const newsItem = new News({ title, content, author });

    try {
        const newNews = await newsItem.save();
        res.status(201).json(newNews);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};