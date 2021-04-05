/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
// const faker = require('faker');
const fs = require('fs');
const mongoose = require('mongoose');
// const path = require('path');
const fetch = require('node-fetch');
const imagesModel = require('./models/imagesModel');

const instructorsPort = 3003;

const generateImages = () => {
  const images = [];
  const offeredBys = ['DeepLearning', 'EURA', 'IBM', 'Illinois', 'Penn', 'UVA'];
  let instructors = [];
  let offeredBysData = [];

  fetch(`http://127.0.0.1:${instructorsPort}/api/allinstructors`)
    .then((instructorsResponse) => instructorsResponse.json())
    .then((instructorsJSON) => {
      instructors = instructorsJSON;
      return fetch(`http://127.0.0.1:${instructorsPort}/api/offeredByAll`);
    })
    .then((offeredByResponse) => offeredByResponse.json())
    .then((offeredByJSON) => {
      offeredBysData = offeredByJSON;
    })
    .then(() => {
      // uses instructors and offeredBy data to create image data for each course
      const primaryInstructorsObj = {}; // {courseNumber: primaryInstructor.id}
      const additionalInstructorsObj = {};// {courseNumber: [additionalInstructor1.id...]}
      for (let i = 1; i <= 100; i++) {
        additionalInstructorsObj[i] = [];
      }
      for (const instructor of instructors) {
        for (let i = 0; i < instructor.courses.length; i++) {
          if (instructor.courses[i].isPrimaryInstructor) {
            primaryInstructorsObj[instructor.courses[i].courseNumber] = instructor.id;
          } else {
            additionalInstructorsObj[instructor.courses[i].courseNumber].push(instructor.id);
          }
        }
      }

      // creates 100 image documents
      for (let id = 1; id <= 100; id++) {
        const offeredBy = offeredBysData[id - 1].offeredByIndex;

        // builds additionalInstructors array for each course
        const additionalInstructors = [];
        for (let i = 0; i < additionalInstructorsObj[id].length; i++) {
          const URL = {
            instructorId: additionalInstructorsObj[id][i],
            instructorImage: `https://rpt26-ingenuity.s3-us-west-1.amazonaws.com/instructors/${additionalInstructorsObj[id][i]}.jpg`,
          };
          additionalInstructors.push(URL);
        }

        // assigns 3 of 9 testimonials to each course
        const testimonialsArray = [];
        while (testimonialsArray.length < 3) {
          const random = Math.ceil(Math.random() * 9);
          if (!testimonialsArray.includes(random)) {
            testimonialsArray.push(random);
          }
        }
        const testimonial1Id = testimonialsArray[0];
        const testimonial2Id = testimonialsArray[1];
        const testimonial3Id = testimonialsArray[2];

        const testimonial1Image = `https://rpt26-ingenuity.s3-us-west-1.amazonaws.com/testimonials/${testimonialsArray[0]}.jpg`;
        const testimonial2Image = `https://rpt26-ingenuity.s3-us-west-1.amazonaws.com/testimonials/${testimonialsArray[1]}.jpg`;
        const testimonial3Image = `https://rpt26-ingenuity.s3-us-west-1.amazonaws.com/testimonials/${testimonialsArray[2]}.jpg`;

        // brings together each 'image' then pushes to images
        const image = {
          id,
          offeredBy,
          offeredByAbout: `https://rpt26-ingenuity.s3-us-west-1.amazonaws.com/offeredByAbouts/${offeredBys[offeredBy]}About.png`,
          offeredByMain: `https://rpt26-ingenuity.s3-us-west-1.amazonaws.com/offeredByAbouts/${offeredBys[offeredBy]}Main.png`,
          primaryInstructor: `https://rpt26-ingenuity.s3-us-west-1.amazonaws.com/instructors/${primaryInstructorsObj[id]}.jpg`,
          additionalInstructors,
          testimonial1Image,
          testimonial1Id,
          testimonial2Image,
          testimonial2Id,
          testimonial3Image,
          testimonial3Id,
          courseIcon: `https://rpt26-ingenuity.s3-us-west-1.amazonaws.com/courseIcons/${id}.png`,
        };
        images.push(image);
      }
      // inserts completed images data into images table of images database
      imagesModel.insertMany(images, (err) => {
        if (err) {
          console.error(err);
        }
        console.log('imagesInsert success');
        mongoose.connection.close();
      });
      // write data to images.json(acts as a reference for development, testing)
      fs.writeFileSync('./db/seed/data/images.json', JSON.stringify(images, null, '\t'));
    })
    .catch((err) => {
      if (err) {
        console.error('Error in generateImages: ', err);
      }
    });
};

generateImages();
module.exports.generateImages = generateImages;
