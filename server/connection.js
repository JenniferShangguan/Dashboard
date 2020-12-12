const mongo = require('mongoose');
const key = require('./config/keys').mongoURI;
const connectDB = async () => {
  await mongo.connect(key,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
  console.log("Database connected");
}

module.exports = connectDB;
