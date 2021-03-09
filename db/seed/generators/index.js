const instructors = require('./instructorsGenerator.js');
const offeredBys = require('./offeredBysGenerator.js');
const syllabuses = require('./syllabusesGenerator.js');
const testimonials = require('./testimonialsGenerator.js');

instructors.generateInstructors();
offeredBys.generateOfferedBys();
syllabuses.generateSyllabuses();
testimonials.generateTestimonials();
const images = require('./imagesGenerator.js'); //relies on existing instructors.json and offeredBys.json data
images.generateImages();