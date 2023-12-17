const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  name: String,
  cover: String,
});

module.exports = mongoose.model("Card", cardSchema);
