const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
//make sure you have mongoDB installed
// mongo --version to check
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to Database"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}`));
