const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "FullName is required"],
        },
        email: {
            type: String,
            required: [true, "Email is Required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is Required"],
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        image: {
            type: String,
            default: "https://www.dailywisely.com/wp-content/uploads/2022/05/What-type-of-Traveler-are-you-and-where-do-you-love-to-travel.jpg"
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);