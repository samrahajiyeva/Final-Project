const mongoose = require("mongoose")

const Shop = mongoose.model(
    'Shop',
    new mongoose.Schema(
        {
            image: String,
            title: String,
            content: String,
            price: Number
        },
        {
            timestamps: true,
        },
    ),
)

module.exports = { Shop }