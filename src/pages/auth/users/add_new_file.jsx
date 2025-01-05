import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "summernote/dist/summernote-lite.css";
import $ from "jquery";
import "summernote/dist/summernote-lite.min.js";

const ApkUploadForm = () => {
  const [formData, setFormData] = useState({
    app_name: "",
    developer_name: "",
    description: "",
    apk_img: null,
  });

  const [message, setMessage] = useState("");

  // Handle input change for other fields (text, file)
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Initialize Summernote editor for description field
  useEffect(() => {
    $("#description").summernote({
      placeholder: "Enter application description...",
      tabsize: 2,
      height: 200,
    });

    return () => {
      $("#description").summernote("destroy");
    };
  }, []);

  // Convert file to base64 format
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // Submit form data as JSON with base64-encoded files
  const handleSubmit = async (e) => {
    e.preventDefault();

    const description = $("#description").summernote("code"); // Get the content from Summernote
    const { app_name, developer_name, apk_img } = formData;

    try {
      // Convert image file to base64
      const apkImgBase64 = apk_img ? await convertToBase64(apk_img) : null;

      // Prepare JSON data
      const data = {
        app_name,
        developer_name,
        description,
        apk_img: apkImgBase64, // Base64-encoded APK image
      };

      // Send data as JSON to the PHP script
      const response = await fetch("https://apkstores.rf.gd", {
        method: "POST",
        headers: {
          Accept: "application/json", // Ensuring server responds with JSON
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(data), // Send the data as JSON
      });
    //   const response = await fetch(server, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message);
      } else {
        setMessage(result.message);
      }
    } catch (serverError) {
      console.error("Error sending data to server:", serverError);
      setMessage("Error uploading data.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Upload APK Details</h2>
        <form onSubmit={handleSubmit} id="apkForm" encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="app_name">Application Name:</label>
            <input
              type="text"
              id="app_name"
              name="app_name"
              value={formData.app_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="developer_name">Developed By:</label>
            <input
              type="text"
              id="developer_name"
              name="developer_name"
              value={formData.developer_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange} // This ensures value is updated when typing, but Summernote handles the actual content
            />
          </div>

          <div className="form-group">
            <label htmlFor="apk_img">APK Image:</label>
            <input
              type="file"
              id="apk_img"
              name="apk_img"
              accept=".png,.jpeg"
              onChange={handleChange}
              className="text-dark"
            />
          </div>

          <div className="form-group">
            <button type="submit">Upload</button>
            <Link to="/profile" className="btn btn-danger">
              Back
            </Link>
          </div>
        </form>
        {message && <p className="text-danger">{message}</p>}
      </div>
    </div>
  );
};

export default ApkUploadForm;
