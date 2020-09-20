const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

var path = require("path");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Workout",
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false}
);

// HTML routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

// API routes
// GET route from getLastWorkout function
app.get("/api/workouts", (req, res) => {
    db.Workout.find().sort({day: -1}).limit(1)
        .then((dbWorkout) => {
            console.log(`getLastWorkout: ${dbWorkout}`);
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// PUT route from addExercise function
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id, 
        { $push: 
            {
                exercises: req.body
            } 
        }
    )
        .then((dbWorkout) => {
            console.log(`addExercise: ${dbWorkout}`);
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// POST route for createWorkout function
app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then((dbWorkout) => {
            console.log(`createWorkout: ${dbWorkout}`);
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

// GET route for getWorkoutsInRange
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then((dbWorkout) => {
            console.log(`getWorkoutsInRange: ${dbWorkout}`);
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});