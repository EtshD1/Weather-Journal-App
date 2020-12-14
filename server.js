// Dependencies
const express = require("express"),
  app = express(),
  cors = require("cors"),
  bodyParser = require("body-parser");
// Variables
const projectData = {};
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Initialize website folder
app.use(express.static('website'));