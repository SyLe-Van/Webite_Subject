import React, { useState } from "react";
import "./ImageUpload.css";
import axios from "../axios";
import { storage } from "../firebase";

const ImageUpload = ({ username }) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);

            axios
              .post("/upload", {
                caption: caption,
                user: username,
                image: url,
              })
              .then(() => {
                setProgress(0);
                setCaption("");
              })
              .catch((error) => {
                console.error(error);
              });
            setImage(null);
          });

        const handleChange = (event) => {
          setProgress(0);
          setImage(event.target.files[0]);
        };

        const handleUpload = () => {
          if (!image) {
            alert("Please select an image to upload");
            return;
          }

          const uploadTask = image.upload();

          uploadTask.on("progress", (snapshot) => {
            setProgress(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          });

          uploadTask.on("completed", () => {
            handleUploadProgress(uploadTask);
          });

          uploadTask.on("error", (error) => {
            console.error(error);
          });
        };

        return (
          <div className="imageUpload">
            <progress
              className="imageUpload_progress"
              value={progress}
              max="100"
            />

            <input
              type="text"
              placeholder="Enter a caption..."
              className="imageUpload_input"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <input
              className="imageUpload_file"
              type="file"
              onChange={handleChange}
            />

            <button className="imageUpload_button" onClick={handleUpload}>
              Upload
            </button>
          </div>
        );
      }
    );
  };
};

export default ImageUpload;
