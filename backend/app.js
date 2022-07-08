const { Tweet, mongoose } = require("./tweet.model");

let tweet001 = new Tweet({
  date: new Date(),
  author: "admin",
  text: "This is a test tweet",
});

tweet001.save((err, result) => {
  if (err) console.error(err);
  console.log(result);

  mongoose.connection.close();
});
