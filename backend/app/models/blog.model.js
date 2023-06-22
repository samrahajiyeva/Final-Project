const mongoose = require("mongoose")

const Blog = mongoose.model(
    'Blog',
    new mongoose.Schema(
        {
            images: [
                {
                    type: String,
                    isPoster: {
                        type: Boolean,
                        default: false,
                    },
                    src: String,
                },
            ],
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