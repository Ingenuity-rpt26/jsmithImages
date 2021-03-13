const mongoose = require('mongoose');
const offeredBysData = require('../data/offeredBys.json');

let offeredBysInsert = () => {
  mongoose.connect('mongodb://127.0.0.1/instructors', { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'offeredBys connection error'));
  db.once('open', () => {
    console.log('offeredBys connected to db');
  });

  const offeredBysSchema = new mongoose.Schema({
    id: Number,
    offeredByName: String,
    offeredByDescription: String
  }, { collection: 'offeredbys' });

  const OfferedBys = mongoose.model('offeredbys', offeredBysSchema);

  OfferedBys.insertMany(offeredBysData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('OfferedBys success');
    mongoose.connection.close();
  });
};

offeredBysInsert();
module.exports.offeredBysInsert = offeredBysInsert;