import express from 'express';
import { getServiceCategory, getServices, loginController, registerController } from '../controllers/userControllers.js';

const Route = express.Router();

Route.post("/auth/login",loginController);
Route.post("/auth/register",registerController);

Route.get("/services", getServices);
Route.get("/services/:category", getServiceCategory);

export default Route;