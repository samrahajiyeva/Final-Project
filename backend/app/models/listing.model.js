const mongoose = require("mongoose")

const Listing = mongoose.model(
    'Listing',
    new mongoose.Schema(
        {
            image: String,
            day: Number,
            title: String,
            tripType: String,
            place: Number,
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