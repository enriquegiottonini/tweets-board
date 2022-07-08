const { join } = require("path");
const mongoose = require("mongoose");

require("dotenv").config({ path: join(__dirname, "..", ".env") });

// Setting up a default mongoose connection
mongoose
  .connect(process.env.ATLAS_CONNECT_URL)
  .then(() => {
    console.log("Connected to DB.");
    mongoose.connection.close();
  })
  .catch((e) => {
    console.log(e);
  });
