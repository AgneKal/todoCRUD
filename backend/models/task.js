import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    description: String,
    startDate: Date,
    endDate: Date,
    status: {
        type: String,
        enum: [nepradėta, vykdoma, pabaigta, nutraukta]
    }
})

const Task = mongoose.model('tasks', taskSchema);

export { Task };