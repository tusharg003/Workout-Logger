// we dont have access to app inside this file so how do we  create those route
//-- using express router
import express from 'express'
import { createWorkout, getWorkout, getWorkouts } from '../controllers/workoutController.js'

const router = express.Router()//creating an instance of router

router.get('/', getWorkouts)
router.get('/:id', getWorkout)
router.post('/', createWorkout)


router.delete('/:id', (req, res) => {
    res.json({ mssg: 'delete a single workout' })
})
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Upadate a single workout' })
})


export default router