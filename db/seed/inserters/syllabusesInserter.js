const mongoose = require('mongoose');
const syllabusesData = require('../data/syllabuses.json');

let syllabusesInsert = () => {
  mongoose.connect('mongodb://127.0.0.1/syllabuses', { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'syllabuses connection error'));
  db.once('open', () => {
    console.log('Syllabuses service connected to db');
  });

  const syllabusSchema = new mongoose.Schema({
    'id': Number,
    'weeks': [{
      'weekNumber': Number,
      'lessons': [{
        'hoursToCompleteLesson': Number,
        'lessonTitle': String,
        'lessonDescription': String,
        'videos': [
          {
            'videoIndex': Number,
            'videoTitle': String,
            'videoLengthMinutes': Number,
            'videoLengthSeconds': Number
          }
        ],
        'videosLength': Number,
        'readings': [
          {
            'readingIndex': Number,
            'readingTitle': String,
            'readingLengthMinutes': Number
          }
        ],
        'readingsLength': Number,
        'exercises': [{
          'exerciseIndex': Number,
          'exerciseTitle': String,
          'exerciseLengthMinutes': Number
        }],
        'exercisesLength': Number
      }]
    }],
    'hoursToCompleteCourse': Number
  });

  const Syllabus = mongoose.model('syllabuses', syllabusSchema);

  Syllabus.insertMany(syllabusesData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('Syllabus success');
    mongoose.connection.close();
  });
};

syllabusesInsert();

module.exports.syllabusesInsert = syllabusesInsert;