const mongoose = require("mongoose");

// Define the tweet Schema
const tweetSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Tweet", tweetSchema);
