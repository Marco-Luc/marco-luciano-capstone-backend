//Dependencies
require("dotenv").config();
const express = require("express");
const playerRoutes = require("./routes/players");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5050;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("./public/images"));
app.use(express.static("./public/videos"));

//Routes
app.use("/players", playerRoutes);
app.get("/", function (request, response) {
  // response.send
});

//Bootstrap server
app.listen(PORT, function () {
  console.log("Server is running on port", PORT);
});

// get request localhost:2323/players
