// we dont have access to app inside this file so how do we  create those route
//-- using express router
import express from 'express'

const router = express.Router()//creating an instance of router

router.get('/', (req, res) => {
    res.json({ mssg: 'Get all workouts' })
})
router.get('/:id', (req, res) => {
    res.json({ mssg: 'Get single workout' })
})
router.post('/', (req, res) => {
    res.json({ mssg: 'Post a new workout' })
})
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'delete a single workout' })
})
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'Upadate a single workout' })
})


export default router