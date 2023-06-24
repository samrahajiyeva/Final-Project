const mongoose = require("mongoose")

const Blog = mongoose.model(
    'Blog',
    new mongoose.Schema(
        {
            image: String,
            title: String,
            date: String,
            content: String,
            poster: String,
            comment: Number
        },
        {
            timestamps: true,
        },
    ),
)

module.exports = { Blog }