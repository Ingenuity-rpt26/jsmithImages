const mongoose = require('mongoose');

module.exports = imagesSchema = new mongoose.Schema({
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