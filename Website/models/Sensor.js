const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
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
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("sensor", SensorSchema);
