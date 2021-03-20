const mongoose = require('mongoose');
const imagesSchema = require('./seed/schemas/imagesSchema');
const imagesModel = require('./seed/models/imagesModel');

const findOneImage = (courseNumber, imageName, cb) => {
  imagesModel.findOne({ id: courseNumber })
    .then((data) => {
      let url = data[imageName];
      let output = {};
      output[imageName] = url;
      cb(output);
    })
    .catch((err) => {
      if (err) {
        console.error(err);
      }
    });
};

const findAllImages = (courseNumber, cb) => {
  imagesModel.findOne({ id: courseNumber })
    .then((data) => {
      cb(data);
    })
    .catch((err) => {
      if (err) {
        console.error(err);
      }
    });
};

module.exports.findOneImage = findOneImage;
module.exports.findAllImages = findAllImages;

















