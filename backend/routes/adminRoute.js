import express from 'express';
import { addServicePerson, deleteServicePerson } from '../controllers/adminController.js';

const Route = express.Router()

Route.post('/serviceperson/add',addServicePerson)
Route.delete('/serviceperson/delete/:id',deleteServicePerson)

export default Route;