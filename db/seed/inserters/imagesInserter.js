const mongoose = require('mongoose');
const imagesData = require('../data/images.json');
const imagesSchema = require('../schemas/imagesSchema');
const imagesModel = require('../models/imagesModel');

const imagesInsert = () => {
  imagesModel.insertMany(imagesData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('imagesInsert success');
    mongoose.connection.close();
  })
};

imagesInsert();
module.exports.imagesInsert = imagesInsert;