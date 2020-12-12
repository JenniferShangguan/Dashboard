const Car = require('./Car');
const connectDB = require('../connection');

connectDB();

for (let month = 1; month <= 12; month++) {
  const year = 2020;
  const quarter = Math.floor((month - 1) / 3) + 1;
  const makes = ["Toyota", "Honda", "Ford", "Mercedez", "Tesla"];
  let make = makes[Math.floor(Math.random() * makes.length)];
  let make2 = makes[Math.floor(Math.random() * makes.length)];
  const models = ["LE", "SE", "S", "X", "Accord"];
  let model = models[Math.floor(Math.random() * models.length)];
  let model2 = models[Math.floor(Math.random() * models.length)];
  const types = ["Sedan", "Coupe", "SUV", "Hatchback", "Minivan"];
  let type = types[Math.floor(Math.random() * types.length)];
  let type2 = types[Math.floor(Math.random() * types.length)];
  // generate a random integer from 30k to 80k
  const price = Math.floor(Math.random() * 50000) + 30000;
  const price2 = Math.floor(Math.random() * 50000) + 30000;
  let launched = [{ make: make, model: model, type: type, price: price }];
  let upcoming = [{ make: make2, model: model2, type: type2, price: price2 }];

  let newData = new Car({
    Year: year,
    Quarter: quarter,
    Month: month,
    Launched: launched,
    Upcoming: upcoming
  });

  newData.save((err) => {
    if (err) {
      console.log("Something is wrong when adding data");
    }
  })
}
