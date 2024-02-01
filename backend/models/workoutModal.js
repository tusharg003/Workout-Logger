import mongoose from "mongoose";

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    }, reps: {
        type: Number,
        required: true
    }, load: {
        type: Number,
        required: true
    }
}, { timestamps: true })//adds created at and updated at attributes

// Create a Mongoose model named 'Workout' based on the defined schema
const workoutModal = mongoose.model('Workout', workoutSchema);

// Export the 'Workout' model as the default export
export default workoutModal;