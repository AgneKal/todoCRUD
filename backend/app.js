import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/task.route.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Veikia, portas ${port}`);
});

app.use(router);

async function connectDb() {
    mongoose.connect('mongodb://localhost:27017', {
        dbName: 'ToDo'
    });
}

connectDb().catch((err) => console.error(err));

