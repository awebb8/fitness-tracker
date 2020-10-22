const db = require("../models")

module.exports = app => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
    })

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            }).catch(error => {
                console.log(error)
            }) 
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data)
            })
    })

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate({_id: req.params.id}, {
            $push: {exercises: req.body}
        }, {new: true})
        .then(dbUpdate => {
            res.send(dbUpdate)
        })
    }
    )
}