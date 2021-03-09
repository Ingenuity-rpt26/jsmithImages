const instructorsData = require('../data/instructors.json');
const imagesData = require('../data/images.json');
const offeredBysData = require('../data/offeredBys.json');
const syllabusesData = require('../data/syllabuses.json');
const testimonialsData = require('../data/testimonials.json');

//data needs to be generated prior to running tests
describe('instructorsGenerator outputs data in the proper format', () => {
  test('instructorsData should be an object with the correct properties', () => {
    let academicTitle = instructorsData[0].academicTitle;
    let acceptableTitles = ["Instructor", "Associate Professor", "Professor", "PhD"]

    expect(typeof instructorsData).toBe('object');
    expect(typeof instructorsData[0].id).toBe('number');
    expect(typeof instructorsData[0].firstName).toBe('string');
    expect(typeof instructorsData[0].middleInitial).toBe('string');
    expect(instructorsData[0].middleInitial.length).toBe(1);
    expect(acceptableTitles.indexOf(academicTitle)).toBeGreaterThan(-1);
    expect(typeof instructorsData[0].title).toBe('string');
    expect(typeof instructorsData[0].organization).toBe('string');
    expect(typeof instructorsData[0].learners).toBe('number');
    expect(Array.isArray(instructorsData[0].courses)).toBe(true);
    expect(typeof instructorsData[0].instructorAverageRating).toBe('string');
    expect(typeof instructorsData[0].numberOfRatings).toBe('number');
    expect(instructorsData.length).toBe(100);
  })
})

describe('imagesGenerator outputs data in the proper format', () => {
  test('imagesData should be an object with the correct properties', () => {
    expect(typeof imagesData).toBe('object');
    expect(typeof imagesData[0]).toBe('object');
    expect(typeof imagesData[0].id).toBe('number');
    expect(typeof imagesData[0].offeredBy).toBe('number');
    expect(typeof imagesData[0].offeredByAbout).toBe('string');
    expect(typeof imagesData[0].offeredByMain).toBe('string');
    expect(typeof imagesData[0].primaryInstructor).toBe('string');
    expect(Array.isArray(imagesData[0].additionalInstructors)).toBe(true);
    expect(typeof imagesData[0].additionalInstructors[0].instructorId).toBe('number');
    expect(typeof imagesData[0].additionalInstructors[0].instructorImage).toBe('string');
    expect(typeof imagesData[0].testimonial1Image).toBe('string');
    expect(typeof imagesData[0].testimonial1Id).toBe('number');
    expect(typeof imagesData[0].testimonial2Image).toBe('string');
    expect(typeof imagesData[0].testimonial2Id).toBe('number');
    expect(typeof imagesData[0].testimonial3Image).toBe('string');
    expect(typeof imagesData[0].testimonial3Id).toBe('number');
    expect(typeof imagesData[0].courseIcon).toBe('string');
  })
})

describe('offeredBysGenerator outputs data in the proper format', () => {
  test('offeredBysData should be an object with the correct properties', () => {
    let offeredByNames = ['DeepLearning.AI', 'Erasmus University Rotterdam', 'IBM', 'University of Illinois at Urbana-Champaign', 'University of Pennsylvania', 'University of Virginia'];
    expect(typeof offeredBysData).toBe('object');
    expect(typeof offeredBysData[0]).toBe('object');
    expect(typeof offeredBysData[0].id).toBe('number');
    expect(typeof offeredBysData[0].offeredByIndex).toBe('number');
    expect(typeof offeredBysData[0].offeredByName).toBe('string');
    expect(offeredByNames.indexOf(offeredBysData[0].offeredByName)).toBeGreaterThan(-1);
    expect(typeof offeredBysData[0].offeredByDescription).toBe('string');
  })
})

describe('syllabusesGenerator outputs data in the proper format', () => {
  test('syllabusesData should be an object with the correct properties', () => {
    expect(typeof syllabusesData).toBe('object');
    expect(typeof syllabusesData[0]).toBe('object');
    expect(typeof syllabusesData[0].id).toBe('number');
    expect(Array.isArray(syllabusesData[0].weeks)).toBe(true);
    expect(typeof syllabusesData[0].weeks[0].weekNumber).toBe('number');
    expect(typeof syllabusesData[0].weeks[0].hoursToCompleteWeek).toBe('number');
    expect(typeof syllabusesData[0].weeks[0].title).toBe('string');
    expect(typeof syllabusesData[0].weeks[0].description).toBe('string');
    expect(Array.isArray(syllabusesData[0].weeks[0].videos)).toBe(true);
    expect(typeof syllabusesData[0].weeks[0].videos[0].videoIndex).toBe('number');
    expect(typeof syllabusesData[0].weeks[0].videos[0].videoTitle).toBe('string');
    expect(typeof syllabusesData[0].weeks[0].videos[0].videoLengthMinutes).toBe('number');
    expect(typeof syllabusesData[0].weeks[0].videos[0].videoLengthSeconds).toBe('number');
    expect(typeof syllabusesData[0].weeks[0].videosLength).toBe('number');
    expect(Array.isArray(syllabusesData[0].weeks[0].readings)).toBe(true);
    expect(typeof syllabusesData[0].weeks[0].readings[0].readingIndex).toBe('number');
    expect(typeof syllabusesData[0].weeks[0].readings[0].readingTitle).toBe('string');
    expect(typeof syllabusesData[0].weeks[0].readings[0].readingLengthMinutes).toBe('number');
    expect(typeof syllabusesData[0].weeks[0].readingsLength).toBe('number');
    expect(Array.isArray(syllabusesData[0].weeks[0].exercises)).toBe(true);
    expect(typeof syllabusesData[0].weeks[0].exercises[0].exerciseIndex).toBe('number');
    expect(typeof syllabusesData[0].weeks[0].exercises[0].exerciseTitle).toBe('string');
    expect(typeof syllabusesData[0].weeks[0].exercises[0].exerciseLengthMinutes).toBe('number');
    expect(typeof syllabusesData[0].hoursToCompleteCourse).toBe('number');
    expect(typeof syllabusesData[0].weeks[0].exercisesLength).toBe('number');
  })
})

describe('testimonialsGenerator outputs data in the proper format', () => {
  test('testimonialsData should be an object with the correct properties', () => {
    expect(typeof testimonialsData).toBe('object');
    expect(typeof testimonialsData[0]).toBe('object');
    expect(typeof testimonialsData[0].id).toBe('number');
    expect(typeof testimonialsData[0].name).toBe('string');
    expect(typeof testimonialsData[0].testimonialText).toBe('string');
  })
})