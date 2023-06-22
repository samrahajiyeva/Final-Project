const mongoose = require("mongoose")

const Shop = mongoose.model(
    'Shop',
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
            content: String,
            price: Number
        },
        {
            timestamps: true,
        },
    ),
)

module.exports = { Blog }