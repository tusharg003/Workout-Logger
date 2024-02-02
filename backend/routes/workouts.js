// we dont have access to app inside this file so how do we  create those route
//-- using express router
import express from 'express'
import { createWorkout, deleteWorkout, getWorkout, getWorkouts, updateWorkout } from '../controllers/workoutController.js'

const router = express.Router()//creating an instance of router
//GET all workouts
router.get('/', getWorkouts)
//GET single workout 
router.get('/:id', getWorkout)
//POST new workout
router.post('/', createWorkout)
//DELETE single workout
router.delete('/:id', deleteWorkout)
//UPDATE single workout
router.patch('/:id', updateWorkout)


export default router