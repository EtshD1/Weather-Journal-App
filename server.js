/* Dependencies */
const express = require("express"),
  app = express(),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 8080;
/* Variables */
const projectData = {};
/* Middlewares*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
// Initialize website folder
app.use(express.static('website'));
/*  Callback functions */
const callbacks = {
  homepage: (req, res) => { res.sendFile("./index.html"); }
};
/* Routes */
// GET: homepage
app.get("/", callbacks.homepage);
/* Start up Server */
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});