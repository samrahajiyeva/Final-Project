const mongoose = require("mongoose")

const Listing = mongoose.model(
    'Listing',
    new mongoose.Schema(
        {
            image: String,
            title: String,
            tripType: String,
            place: String,
            activity: Number,
            content: String,
            price: Number
        },
        {
            timestamps: true,
        },
    ),
)

module.exports = { Listing }