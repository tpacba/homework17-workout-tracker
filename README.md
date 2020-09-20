# Workout Tracker

![license](https://img.shields.io/badge/license-ISC-red.svg)
![express](https://img.shields.io/badge/express-4.16.3-blue.svg)
![mongoose](https://img.shields.io/badge/mongoose-5.3.16-green.svg)
![morgan](https://img.shields.io/badge/morgan-1.9.1-yellow.svg)

## Description

The app allows users to view create and track daily workouts. Users are able to log multiple exercises in a workout on a given day and track the name, type, weight, sets, reps, and duration of the exercise or, ff the exercise is a cardio exercise, track the distance traveled. This app requires a Mongo database with a Mongoose schema and handle routes with Express.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Installation

Run `npm install` to install the following dependencies:
* "express": "^4.16.3",
* "mongoose": "^5.3.16",
* "morgan": "^1.9.1"

## Usage

The app is deployed with [Heroku]().

Run `npm start` or `node server.js` to start the app in local host 

(Optional: Run `node ./seeders.js` to begin with some seed data.)

## Contributing

Front-end code was developed by UCLA Coding Bootcamp.

## License

ISC

## Tests

Although there are currently no tests for the app, it should follow the criteria:

* When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

* The user should be able to add exercises to a previous workout plan.

* The user should be able to add new exercises to a new workout plan.

* The user should be able to view the combined weight of multiple exercises on the `stats` page.

## Questions

If you have any questions, you can reach me through my email tpacba@live.com or connect with me on [GitHub](https://github.com/tpacba).

