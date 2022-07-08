const { mongoose } = require("./db");

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

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = { Tweet, mongoose };
