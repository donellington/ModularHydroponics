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
  Sensor1: {
    type: String,
    required: false
  },
  Sensor2: {
    type: String,
    required: false
  },
  Sensor3: {
    type: String,
    required: false
  },
  Sensor4: {
    type: String,
    required: false
  },
  Sensor5: {
    type: String,
    required: false
  },
  Sensor6: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Sensor = mongoose.model("sensor", SensorSchema);
