const mongoose = require('mongoose');
const offeredBysData = require('../data/offeredBys.json');

let offeredBysInsert = () => {
  mongoose.connect('mongodb://127.0.0.1/instructors', { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'offeredBys connection error'));
  db.once('open', () => {
    console.log('offeredBys connected to db');
  });

  const offeredBySchema = new mongoose.Schema({
    id: Number,
    offeredByName: String,
    offeredByDescription: String
  }, { collection: 'offeredBys' });

  const OfferedBy = mongoose.model('OfferedBy', offeredBySchema);

  OfferedBy.insertMany(offeredBysData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('OfferedBys success');
    mongoose.connection.close()
  })
};


module.exports.offeredBysInsert = offeredBysInsert;