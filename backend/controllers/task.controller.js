import { Task } from "../models/task.js";

async function addTask(taskModel) {
    let task = new Task({
        ...taskModel
    });
    await task.save();
    return task.toObject();
}

async function getTasks() {
    const tasks = await Task.find();
    return tasks.map(t => t.toObject());
}

async function getTask(id) {
    const task = await Task.findById(id);
    return task.toObject();
}

async function updateTask(id, taskModel) {
    const filter = { _id: id };
    await Task.findByIdAndUpdate(filter, taskModel);
}

async function deleteTask(id) {
    await Task.findByIdAndDelete(id);
}



export { addTask, getTasks, getTask, updateTask, deleteTask };