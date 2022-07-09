const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const { join } = require("path");

// Connect to MongoDB database
require("dotenv").config({ path: join(__dirname, "..", ".env") });

// Setting up a default mongoose connection
mongoose
  .connect(process.env.ATLAS_CONNECT_URL)
  .then(() => {
    console.log("Connected to DB.");

    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.get("/", (req, res) => {
      res.send("<h1>Home Page</h1>");
    });

    const PORT = process.env.PORT;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
