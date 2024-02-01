//entry for backend
import dotenv from 'dotenv'//package that loads environment variables from .env file into the process.env object avaible to us globally in NodeJs
import express from "express"
import workoutRoutes from './routes/workouts.js'
import mongoose from 'mongoose';

// Load environment variables from .env file
dotenv.config();

//express app
const app = express();


//middlewares
app.use(express.json());//any req that comes in if it has body then it passes and attacs it to req obj
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/workouts', workoutRoutes)// workout routes fires only when /api/workouts there

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //once connected to db then only we listen to requests
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on Port ', process.env.PORT)
        })

    })
    .catch((error) => { console.log(error) })


