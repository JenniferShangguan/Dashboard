const mongo = require("mongoose");
const Schema = mongo.Schema;

const carSchema = new Schema({
  Year: Number,
  Quarter: Number,
  Month: Number,
  Launched: [
    {
      make: { type: String, required: true },
      model: { type: String, required: true },
      type: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ],
  Upcoming: [
    {
      make: { type: String, required: true },
      model: { type: String, required: true },
      type: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ]
})

module.exports = Car = mongo.model("Car", carSchema);