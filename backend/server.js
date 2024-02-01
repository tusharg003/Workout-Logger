//entry for backend
import dotenv from 'dotenv'//package that loads environment variables from .env file into the process.env object avaible to us globally in NodeJs
import express from "express"

// Load environment variables from .env file
dotenv.config();



//express app
const app = express();



//routes
app.get('/', (req, res) => {
    res.json({ mssg: 'Welcome to the app' })
})



//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on Port ', process.env.PORT)
})

