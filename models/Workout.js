const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    // Code schema properties here

});

// Code schema methods here

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;