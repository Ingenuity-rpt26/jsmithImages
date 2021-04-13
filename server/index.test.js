/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('./index.js');
const imagesData = require('../db/seed/data/images.json');

const request = supertest(app);

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true);
  });
});

describe('Server responds to its endpoints', () => {
  it('Gets the test endpoint', async (done) => {
    const res = await request.get('/test');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Pass!');
    done();
  });

  it('Gets one primaryInstructor image URL', async (done) => {
    const res = await request.get('/api/image/3/primaryInstructor');
    expect(res.status).toBe(200);
    const thirdPrimary = '{"primaryInstructor\":'.concat(JSON.stringify(imagesData[2].primaryInstructor), '}');
    expect(JSON.stringify(res.body)).toBe(thirdPrimary);
    done();
  });

  it('Gets an array of additional instructors\' image URL\'s', async (done) => {
    const res = await request.get('/api/image/3/additionalInstructors');
    expect(res.status).toBe(200);
    expect(res.body.additionalInstructors.length).toBe(2);
    done();
  });

  it('Gets offeredBy', async (done) => {
    const res = await request.get('/api/image/2/offeredBy');
    expect(res.status).toBe(200);
    expect(res.body.offeredBy).toBe(1);
    done();
  });
  it('Gets all images from one course', async (done) => {
    const res = await request.get('/api/images/3');
    const offeredByMain = 'https://rpt26-ingenuity.s3-us-west-1.amazonaws.com/offeredByAbouts/';
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(3);
    expect(res.body.offeredBy).toBe(imagesData[2].offeredBy);
    expect(res.body.offeredByAbout).toMatch(/offeredByAbouts/);
    expect(res.body.offeredByMain).toMatch(new RegExp(offeredByMain));
    const primaryInstructor = JSON.stringify(imagesData[2].primaryInstructor);
    expect(JSON.stringify(res.body.primaryInstructor)).toBe(primaryInstructor);
    expect(res.body.additionalInstructors.length).toBe(imagesData[2].additionalInstructors.length);
    expect(res.body.testimonial1Id).toBe(imagesData[2].testimonial1Id);
    expect(res.body.testimonial2Id).toBe(imagesData[2].testimonial2Id);
    expect(res.body.testimonial3Id).toBe(imagesData[2].testimonial3Id);
    done();
  });
});
