const express = require('express');

const app = express();
const port = 3006;



// GET /api/image/:courseNumber/:imageName

app.get('/api/image/:courseNumber/:imageName', (req, res, next) => {
})

// GET /api/primaryInstructor/:courseNumber

app.get('/api/primaryInstructor/:courseNumber', (req, res, next) => {

})

// GET /api/images/:courseNumber

app.get('GET /api/images/:courseNumber', (req, res, next) => {

})

// GET /api/svg/:svgName

app.get('/api/svg/:svgName', (req, res, next) => {

})

// GET /api/svgs

app.get('/api/svgs', (req, res, next) => {

})

app.listen(port, () => {
  console.log(`Images service listening at http://localhost:${port}`);
});