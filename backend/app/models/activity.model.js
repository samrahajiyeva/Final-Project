const mongoose = require("mongoose")

const Activity = mongoose.model(
    'Activity',
    new mongoose.Schema(
        {
            title: String,
            day: Number,
            content: String,
            image: String,
            season: String,
            location: String,
        },
        {
            timestamps: true,
        },
    ),
)

module.exports = { Activity }