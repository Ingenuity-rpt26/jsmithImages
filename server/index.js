/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db/index.js');
const svgs = require('./svgs.js');

const app = express();
const port = 3006;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(cors());

app.get('/api/image/:courseNumber/:imageName', (req, res) => {
  db.findOneImage(req.params.courseNumber, req.params.imageName, (image) => {
    res.send(image);
  });
});

app.get('/api/images/:courseNumber', (req, res) => {
  db.findAllImages(req.params.courseNumber, (images) => {
    res.send(images);
  });
});

app.get('/api/svg/:svgName', (req, res) => {
  res.send(JSON.stringify(svgs[req.params.svgName]));
});

app.get('/api/svgs', (req, res) => {
  res.send(JSON.stringify(svgs));
});

app.get('/test', async (req, res) => {
  res.json({ message: 'Pass!' });
});

app.listen(port, () => {
  console.log(`Images service listening at http://localhost:${port}`);
});

module.exports = app;
