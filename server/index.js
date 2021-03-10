const express = require('express');
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const svgs = require('./svgs.js');

const app = express();
const port = 3006;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/image/:courseNumber/:imageName', function (req, res) {
  db.findOneImage(req.params.courseNumber, req.params.imageName, (image) => {
    res.send(image);
  });
});

app.get('/api/images/:courseNumber', (req, res) => {
  db.findAllImages(req.params.courseNumber, (images) => {
    res.send(images);
  })
})

app.get('/api/svg/:svgName', (req, res) => {
  res.send(svgs[req.params.svgName]);
})


app.get('/api/svgs', (req, res) => {
  res.send(svgs);
})

app.listen(port, () => {
  console.log(`Images service listening at http://localhost:${port}`);
});