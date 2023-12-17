const mongoose = require("mongoose");
const Card = require("./dbCards.js");
require("dotenv").config();
const cors = require("cors");
const express = require("express");

var app = express();
const port = process.env.PORT;
const connection_url =
  "mongodb+srv://syle:07122002@tinder.99pdkzv.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(cors());

try {
  mongoose.connect(connection_url);
  console.log("database successfully connected");
} catch (error) {
  throw error;
}

app.get("/", (req, res) => res.status(200).send("Tinder"));

app.post("/dating/cards", (req, res) => {
  const { name, imgUrl } = req.body;
  //   Card.create(dbCards, (err, data) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     } else {
  //       res.status(201).send(data);
  //     }
  //       });
  const cardsDoc = Card.create({
    name,
    imgUrl,
  });
  console.log(cardsDoc);
});

app.get("/dating/cards", (req, res) => {
  Card.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () =>
  console.log(`Listening on localhost: http://localhost:${port}`)
);
