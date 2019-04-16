const mongoose = require('mongoose');
const { Schema } = mongoose;

const { schema: commentSchema } = require("../comment/commentModel");

const userSchema = exports.schema = new Schema({
    userName: String,
    email: String,
    password: String,
    isVerified: {
        type: Boolean,
        default: false
    },
    comments: [commentSchema]
});

// exports.model = mongoose.model('User', userSchema);
module.exports = User = mongoose.model('user', userSchema);