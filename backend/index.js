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

    // app.use(cors());

    //Cors Configuration - Start
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested, Content-Type, Accept Authorization"
      );
      if (req.method === "OPTIONS") {
        res.header(
          "Access-Control-Allow-Methods",
          "POST, PUT, PATCH, GET, DELETE"
        );
        return res.status(200).json({});
      }
      next();
    });
    //Cors Configuration - End
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
