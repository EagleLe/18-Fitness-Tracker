const db = require("../models");
const express = require('express');
const router = express.Router();
const path = require("path");

//get the workouts
router.get("/api/workouts", (req, res) => {
    workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
//Create workout
router.post("/api/workouts/", (req, res) => {
    console.log("Workout created?")
    workout.create(req.body).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});
// workout range
router.get("/api/workouts/range", ({}, res) => {
    workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});
//add exercise 
router.put("/api/workouts/:id", (req, res) => {
    workout.findByIdAndUpdate({ _id: req.params.id }, { exercises: req.body }).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router;