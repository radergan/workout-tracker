const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout.js");

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, {exercises: req.body})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    console.log(body);
    Workout.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


/*basic HTML routes*/
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + './../public/index.html'));
});
router.get('/exercise', function(req, res) {
    res.sendFile(path.join(__dirname + './../public/exercise.html'));
});
router.get('/stats', function(req, res) {
    res.sendFile(path.join(__dirname + './../public/stats.html'));
});
module.exports = router;