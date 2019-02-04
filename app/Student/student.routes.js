
import express from 'express';
import {default as studentApi} from './student.ctrl';

let router = express.Router();

//To Insert Student Data
router.post('/NodeCrupOP/api/saveData', studentApi.InsertStudentData);

//To get Student data By Id
router.get('/NodeCrupOP/api/getDataById/:id', studentApi.getStudentDataById);

//Get All Student Data
router.get('/NodeCrupOP/api/getAllStudentData', studentApi.getAllStudentData);

router.post('/NodeCrupOP/api/UpdateStudentData', studentApi.UpdateStudentData);

router.post('/NodeCrupOP/api/DeleteStudentById', studentApi.DeleteStudentById);

router.post('/NodeCrupOP/api/DeleteStudentData', studentApi.DeleteStudentData);

export default router;



