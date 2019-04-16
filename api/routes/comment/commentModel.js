const mongoose = require("mongoose");
const { Schema } = mongoose;

const { schema: userSchema} = require("../user/userModel");

const commentSchema = exports.schema = new Schema({
  title: String,
  markdown: String
});

exports.model = mongoose.model("Comment", commentSchema);
