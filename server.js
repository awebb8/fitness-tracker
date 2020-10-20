const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

const connection = mongoose.connection;
connection.on("connection", () => {
    console.log("Mongoose successfully connected");
});
connection.on("error", (err) => {
    console.log("Mongoose connection error");
});

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true, useUnifiedTopology: true });



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });