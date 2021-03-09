const express = require('express');
const db = require('../db/index.js');
var bodyParser = require('body-parser');

const app = express();
const port = 3006;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/image/:courseNumber/:imageName', function (req, res) {
  let imagesData = db.findOneImage(req.params.courseNumber, req.params.imageName, (image) => {
    res.send(image);
  });
});

// GET /api/primaryInstructor/:courseNumber

// app.get('/api/primaryInstructor/:courseNumber', (req, res, next) => {

// })

// // GET /api/images/:courseNumber

// app.get('GET /api/images/:courseNumber', (req, res, next) => {

// })

// // GET /api/svg/:svgName

// app.get('/api/svg/:svgName', (req, res, next) => {

// })

// // GET /api/svgs

// app.get('/api/svgs', (req, res, next) => {

// })

app.listen(port, () => {
  console.log(`Images service listening at http://localhost:${port}`);
});