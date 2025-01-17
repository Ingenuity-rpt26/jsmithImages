/* eslint-disable no-console */
const mongoose = require('mongoose');
const imagesSchema = require('../schemas/imagesSchema');

const mongoURL = process.env.MONGO_URL || 'mongodb://127.0.0.1/images';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'images connection error'));
db.once('open', () => {
  console.log('images connected to db');
});

const ImagesModel = mongoose.model('Image', imagesSchema);

module.exports = ImagesModel;
