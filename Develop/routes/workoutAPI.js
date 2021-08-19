const express = require('express');
const router = express.Router();
const path = require("path");
const workout = require('../models/workout');


router.get("/api/workouts", (req, res) => {
    workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });




});

module.exports = router;