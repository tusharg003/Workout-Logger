//bunch of fun to be ref indside the router file

import mongoose from "mongoose";
import workoutModal from "../models/workoutModal.js";//to interact with DB

//get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await workoutModal.find({}).sort({ createdAt: -1 })

    res.status(200).json(workouts);

}
//get single workouts
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such workout' })
    }

    const workout = await workoutModal.findById(id);
    if (!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}

//create a new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    //add doc to DB
    try {
        const workout = await workoutModal.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such Workout to delete' })
    }

    const workout = await workoutModal.findOneAndDelete({ _id: id })
    if (!workout) {
        return res.status(404).json({ error: 'No such workout ' })
    }
    res.status(200).json(workout)
}

//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await workoutModal.findOneAndUpdate({ _id: id }, {
        ...req.body// spread the request body as it has the updated title reps and load attribute
    })

    if (!workout) {
        return res.status(404).json({ error: 'No such workout ' })
    }
    res.status(200).json(workout)
}

export { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout }