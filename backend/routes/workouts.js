// we dont have access to app inside this file so how do we  create those route
//-- using express router
import express from 'express'
import workoutModal from '../models/workoutModal.js'

const router = express.Router()//creating an instance of router

router.get('/', (req, res) => {
    res.json({ mssg: 'Get all workouts' })
})
router.get('/:id', (req, res) => {
    res.json({ mssg: 'Get single workout' })
})
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body
    // console.log(req.body)
    try {    
        const workout = await workoutModal.create({ title, load, reps });
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    res.json({ mssg: 'Post a new workout' })
})
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'delete a single workout' })
})
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Upadate a single workout' })
})


export default router