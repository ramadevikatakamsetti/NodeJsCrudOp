'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _student = require('./student.ctrl');

var _student2 = _interopRequireDefault(_student);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//To Insert Student Data
router.post('/NodeCrupOP/api/saveData', _student2.default.InsertStudentData);

//To get Student data By Id
router.get('/NodeCrupOP/api/getDataById/:id', _student2.default.getStudentDataById);

//Get All Student Data
router.get('/NodeCrupOP/api/getAllStudentData', _student2.default.getAllStudentData);

router.post('/NodeCrupOP/api/UpdateStudentData', _student2.default.UpdateStudentData);

router.post('/NodeCrupOP/api/DeleteStudentById', _student2.default.DeleteStudentById);

router.post('/NodeCrupOP/api/DeleteStudentData', _student2.default.DeleteStudentData);

exports.default = router;