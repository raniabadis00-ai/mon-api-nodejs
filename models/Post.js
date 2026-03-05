const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is required"],
        trim: true,
    },
    content: {
        type: String,
        require: [true, "Email is required"],
        trim: true,
    },
    status: {
        type: String,
        require: [true, "Status is required"],
    },
    _userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });


module.exports = mongoose.model("Post", postSchema);
