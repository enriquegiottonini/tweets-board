const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { join } = require("path");

// Connect to MongoDB database
require("dotenv").config({ path: join(__dirname, "..", ".env") });

// Setting up a default mongoose connection
mongoose
  .connect(process.env.ATLAS_CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB.");

    const app = express();

    app.options("*", cors());
    //app.use(cors());
    app.use(express.json());
    app.use(express.static("build"));
    app.use("/api", routes);

    const PORT = process.env.PORT;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
