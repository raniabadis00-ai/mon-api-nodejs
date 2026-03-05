const mongoose = require("mongoose");


const userShema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Username is required"],
        trim: true,
    },
    email: {
        type: String,
        require: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, "Please enter a valid email"],
    },
    password: {
        type: String,
        require: [true, "Password is required"],
        trim: true,
        minlenght: [6, "Password must be at least 6 characters"],
    },
}, { timestamps: true });

module.exports = mongoose.model("User", userShema);
