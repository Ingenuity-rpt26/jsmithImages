const mongoose = require('mongoose');
const imagesSchema = require('./seed/schemas/imagesSchema');

mongoose.connect('mongodb://localhost/images', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Images service db connection opened');
});

const Images = mongoose.model('images', imagesSchema);

module.exports.findOneImage = (courseNumber, imageName, cb) => {
  Images.findOne({ id: courseNumber })
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

module.exports.findAllImages = (courseNumber, cb) => {
  Images.findOne({ id: courseNumber })
    .then((data) => {
      cb(data);
    })
    .catch((err) => {
      if (err) {
        console.error(err);
      }
    });
};



















