const mongoose = require("mongoose")

const Activity = mongoose.model(
    'Activity',
    new mongoose.Schema(
        {
            title: String,
            content: String,
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
            season: String,
            location: String,
        },
        {
            timestamps: true,
        },
    ),
)

module.exports = { Activity }