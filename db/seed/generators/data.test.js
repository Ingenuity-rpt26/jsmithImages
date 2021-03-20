const imagesData = require('../data/images.json');

//data needs to be generated prior to running tests
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
    expect(imagesData.length).toBe(100);
  });
});