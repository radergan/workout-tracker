const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
day: {
    type: Date,
    default: Date.now(),
    required: "Date is required"
},
exercises: [
    {
        resistance: {
            type: String,
            trim: true,
            required: "Enter resistance"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter a name"
        },
        duration: {
            type: Number,
            required: "Enter a duration"
        },
        weight: {
            type: Number,
            required: "Enter a weight"
        },
        reps:{
            type: Number,
            required: "Enter reps"
        },
        sets: {
            type: Number,
            required: "Enter sets"
        }
    }],
    totalDuration: {
        type: Number,
        default: 24
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
