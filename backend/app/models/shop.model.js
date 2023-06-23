const mongoose = require("mongoose")

const Shop = mongoose.model(
    'Shop',
    new mongoose.Schema(
        {
            // images: [
            //     {
            //         type: String,
            //         isPoster: {
            //             type: Boolean,
            //             default: false,
            //         },
            //         src: String,
            //     },
            // ],
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