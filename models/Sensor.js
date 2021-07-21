const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
// temperature
// humidity
// water_level
// light_value
// tds
// ph
const SensorSchema = new Schema({
  temperature: {
    type: String,
    required: false
  },
  humidity: {
    type: String,
    required: false
  },
  waterlevel: {
    type: String,
    required: false
  },
  lightvalue: {
    type: String,
    required: false
  },
  tds: {
    type: String,
    required: false
  },
  ph: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Sensor = mongoose.model("sensor", SensorSchema);
