import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import Useroute from './routes/userRoute.js';
import AdminRoute from './routes/adminRoute.js'
import { connectDB } from './db/connection.js';

export const app = express();
app.use(cors({ credentials: true }));
app.use(express.json());

dotenv.config({ path: './.env' });

app.use("/api", Useroute);
app.use("/api",AdminRoute);

connectDB();
