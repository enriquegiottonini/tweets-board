const express = require("express");
const { ObjectId } = require("mongodb");
const Tweet = require("./tweet.model");
const router = express.Router();

router.post("/add", async (req, res) => {
  const newTweet = new Tweet({
    date: new Date(req.body.author),
    author: req.body.author,
    text: req.body.text,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
  });
  await newTweet.save();
  res.send(newTweet);
});

router.get("/tweets/all", async (req, res) => {
  const tweets = await Tweet.find().exec();
  res.send(tweets);
});

router.get("/tweet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tweet = await Tweet.findById(id);
    res.send(tweet);
  } catch (error) {
    res.status(404);
    console.log(error);
    res.send({ error: `${id} not found` });
  }
});

router.patch("/tweet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { likes, dislikes } = req.body;
    const tweet = await Tweet.findById(id);

    if (likes) tweet.likes += parseInt(likes);
    if (dislikes) tweet.dislikes += parseInt(dislikes);

    await tweet.save();
    res.send(tweet);
  } catch (err) {
    res.status(404);
    console.log(err);
    res.send({ error: `${id} not found` });
  }
});

module.exports = router;
