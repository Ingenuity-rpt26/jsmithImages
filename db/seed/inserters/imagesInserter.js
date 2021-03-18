const mongoose = require('mongoose');
const imagesData = require('../data/images.json');

let imagesInsert = () => {
  mongoose.connect('mongodb://127.0.0.1/images', { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'images connection error'));
  db.once('open', () => {
    console.log('imagesInsert connected to db');
  });

  const imageSchema = new mongoose.Schema({
    id: Number,
    offeredBy: Number,
    offeredByAbout: String,
    offeredByMain: String,
    primaryInstructor: String,
    additionalInstructors: [{
      instructorId: Number,
      instructorImage: String
    }],
    testimonial1Image: String,
    testimonial1Id: Number,
    testimonial2Image: String,
    testimonial2Id: Number,
    testimonial3Image: String,
    testimonial3Id: Number,
    courseIcon: String
  });

  const Image = mongoose.model('Image', imageSchema);

  Image.insertMany(imagesData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('imagesInsert success');
    db.close();
  })
};


module.exports.imagesInsert = imagesInsert;