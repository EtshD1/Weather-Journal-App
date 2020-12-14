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
  homepage: (req, res) => { res.sendFile("./index.html"); },
  recentEntry: (req, res) => { res.json(projectData); },
  updateEntry: (req, res) => {
    projectData.temperature = req.body.temperature;
    projectData.date = req.body.date;
    projectData.content = req.body.content;
    res.json(projectData);
  }
};
/* Routes */
// GET: homepage
app.get("/", callbacks.homepage);
// GET: JSON projectData
app.get("/recententry", callbacks.recentEntry);
// POST: update projectData
app.post("/recententry", callbacks.updateEntry);
/* Start up Server */
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});