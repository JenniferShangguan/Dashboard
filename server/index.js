const connectDB = require('./connection');
const express = require('express');
const Car = require('./model/Car');
const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.get('/api/cars', (req, res) => {
  Car.find()
    .then(cars => res.status(200).json(cars))
    .catch(err => res.status(500).json(err))
})

app.listen(port, () => {
  console.log(`Server starts at port ${port}`);
})
