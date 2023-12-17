const mongoose = require("mongoose");
const Card = require("./dbCards.js");
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");
var app = express();
const port = process.env.PORT;
const connection_url =
  "mongodb+srv://syle:07122002@tinder.99pdkzv.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(cors());
app.use(fileUpload());
try {
  mongoose.connect(connection_url);
  console.log("database successfully connected");
} catch (error) {
  throw error;
}

app.get("/", (req, res) => res.status(200).send("Tinder"));

const uploadSingleFile = async (fileObject) => {
  const { file } = fileObject;
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  let extName = path.extname(file.name);
  let baseName = path.basename(file.name, extName);
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  try {
    await file.mv(finalPath);
    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (err) {
    console.log(">>> check error: ", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};

app.post("/dating/cards", async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: "No file provided" });
    }

    const images = await uploadSingleFile(req.files);
    const {
      file: { name },
    } = req.files;
    const parts = name.split(".");
    const ext = parts[parts.length - 1];
    const postDoc = await Card.create({
      cover: images.path,
    });
    res.json(postDoc);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
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
