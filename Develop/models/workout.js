const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        required: true
    },
    exercise: [{
        type: {
            type: String,
            trim: true,
            required: true,

        },
        name: {

            type: String,
            trim: true,
            required: true,
        },
        duration: {

            type: Number,
            required: true,
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
})

module.exports = mongoose.model('workout', WorkoutSchema);