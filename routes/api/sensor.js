const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load User model
const SensorData = require("../../models/Sensor");

// @route POST api/sensor/sensor
// @desc sensor data from raspberry pi

router.post("/sensor", (req, res) => {
  const newSensorData = new SensorData({
    temperature: req.body.temperature, // temperature
    humidity: req.body.humidity, // humidity
    waterlevel: req.body.waterlevel, // water_level
    lightvalue: req.body.lightvalue, // light_value
    tds: req.body.tds, // tds
    ph: req.body.ph, // pH
  });
  newSensorData
    .save()
    .then(res.json({ data: "All input sensor data received" }));
});

router.get("/getSensorData", function (req, res) {
  SensorData.find(function (err, data) {
    if (err) res.send(err);
    res.json(data);
  });
});

module.exports = router;
