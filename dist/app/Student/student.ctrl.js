'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _student = require('./student.models');

var _student2 = _interopRequireDefault(_student);

var _student3 = require('./student.class');

var _cryptr = require('cryptr');

var _cryptr2 = _interopRequireDefault(_cryptr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cryptr = new _cryptr2.default('myTotalySecretKeyStepVTech');

//import { dbConfig } from '../../config/env/development';

var studentCtrl = {};

studentCtrl.getStudentDataById = function (req, res) {
    var studentData = new _student3.Obj(req.body);
    var user_id = {
        user_Id: payload.user_data._id
    };
    try {
        Applicants.findOne(student_ID, function (error, result) {
            if (error) {
                res.json({
                    code: '400',
                    message: error.message
                });
            } else {
                var jwt_payload = {
                    first_Name: student_Data.first_Name,
                    last_Name: student_Data.last_Name,
                    gender: student_Data.gender,
                    Joining_Date: student_Data.Joining_Date,
                    email: student_Data.email,
                    mobile: student_Data.mobile,
                    course: student_Data.course
                };
                console.log(jwt_payload);
            }
        });
    } catch (err) {
        res.json({
            code: 400,
            message: err.message
        });
    }
};

studentCtrl.getAllStudentData = function (req, res) {

    try {
        _student2.default.find(function (error, result) {
            if (error) {
                console.log(error.message);
                res.json({
                    code: '400',
                    message: error.message
                });
            } else {
                console.log(result);
                res.json({
                    code: '200',
                    message: "retrieved data",
                    data: result
                });
            }
        });
    } catch (err) {
        res.json({
            code: 400,
            message: err.message
        });
    }
};

studentCtrl.InsertStudentData = function (req, res) {
    var student_Data = new _student3.Obj(req.body);
    var student_data = {
        first_Name: student_Data.first_Name,
        last_Name: student_Data.last_Name,
        gender: student_Data.gender,
        Joining_Date: student_Data.Joining_Date,
        email: student_Data.email,
        mobile: student_Data.mobile,
        course: student_Data.course
    };
    try {
        _student2.default.insertMany(student_data, function (error, result) {
            if (error) {
                console.log(error.message);
                res.json({
                    code: '400',
                    message: error.message
                });
            } else {
                console.log(result);
                res.json({

                    message: "Data Inserted"
                });
            }
        });
    } catch (err) {
        res.json({
            code: 400,
            message: err.message
        });
    }
};

studentCtrl.UpdateStudentData = function (req, res) {
    var student_Data = new _student3.Obj(req.body);
    var email = student_Data.email;
    var emailData = {
        email: student_Data.email
    };
    try {
        _student2.default.updateOne(emailData, { $set: student_Data }, function (error, result) {

            if (error) {
                console.log(error.message);

                res.json({

                    code: '400',
                    message: error.message
                });
            } else {
                console.log(result);
                res.json({

                    message: "Data Updated"
                });
            }
        });
    } catch (err) {
        res.json({
            code: 400,
            message: err.message
        });
    }
};

studentCtrl.DeleteStudentById = function (req, res) {
    var student_Data = new _student3.Obj(req.body);
    console.log('student_Data', student_Data);
    var emailData = {
        email: student_Data.email
    };

    try {
        _student2.default.deleteOne(emailData, function (error, result) {

            if (error) {
                console.log(error.message);
                res.json({
                    code: '400',
                    message: error.message
                });
            } else {
                console.log(result.n);
                if (result.n == 1) {
                    res.json({
                        code: '200',
                        message: "Data Deleted successfully"
                    });
                } else {
                    res.json({
                        code: '204',
                        message: 'Record not exists'
                    });
                }
            }
        });
    } catch (err) {
        res.json({
            code: 400,
            message: err.message
        });
    }
};

studentCtrl.DeleteStudentData = function (req, res) {
    var _Id = new _student3.Obj(req.body._id);

    try {
        _student2.default.deleteMany(_Id, function (error, result) {

            if (error) {
                console.log(error.message);
                res.json({
                    code: '400',
                    message: error.message
                });
            } else {
                console.log(result);
                res.json({

                    message: "Data Deleted successfully"
                });
            }
        });
    } catch (err) {
        res.json({
            code: 400,
            message: err.message
        });
    }
};

exports.default = studentCtrl;