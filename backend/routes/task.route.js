import express from 'express';
import { addTask, deleteTask, getTask, getTasks, updateTask } from '../controllers/task.controller.js';


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello');
});

router.post('/tasks', async (req, res) => {
    let task = await addTask(req.body);
    res.send(task);
});

router.get('/tasks', async (req, res) => {
    let tasks = await getTasks();
    res.send(tasks);
});

router.get('/tasks/:id', async (req, res) => {
    let task = await getTask(req.params['id']);
    res.send(task);
});

router.put('/tasks/:id', async (req, res) => {
    await updateTask(req.params['id'], req.body);
    res.send({});
});

router.delete('/tasks/:id', async (req, res) => {
    await deleteTask(req.params['id']);
    res.send({});
});

export { router }