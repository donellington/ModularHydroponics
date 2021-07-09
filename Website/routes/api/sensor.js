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
    Sensor1: req.body.temperature, // temperature
    Sensor2: req.body.humidity, // humidity
    Sensor3: req.body.waterlevel, // water_level
    Sensor4: req.body.lightvalue, // light_value 
    Sensor5: req.body.tds, // tds
    Sensor6: req.body.ph  // pH
  });
  newSensorData.save().then(res.json({ data: "All input sensor data received" }));
});

router.get("/getSensorData", function(req, res) {
        SensorData.find(function(err, data) {
            if (err)
                res.send(err);
            res.json(data);
        });
    });

module.exports = router;
