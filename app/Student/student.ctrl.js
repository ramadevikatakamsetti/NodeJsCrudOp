import { default as student } from './student.models';
import { Obj } from './student.class';

//import { dbConfig } from '../../config/env/development';
import Cryptr from 'cryptr';

var cryptr = new Cryptr('myTotalySecretKeyStepVTech');
let studentCtrl = {};

studentCtrl.getStudentDataById = (req, res) => {
    let studentData = new Obj(req.body);
    let user_id = {
        user_Id: payload.user_data._id
    }
    try {
        Applicants.findOne(student_ID, (error, result) => {
            if(error) {
                res.json({
                    code:'400',
                    message:error.message
                })
            } else {
                var jwt_payload = {
                first_Name: student_Data.first_Name,
                last_Name: student_Data.last_Name,
                gender: student_Data.gender,
                Joining_Date: student_Data.Joining_Date,
                email: student_Data.email,
                mobile: student_Data.mobile,
                course: student_Data.course
                }
                console.log(jwt_payload)
              
            }
        })
    }catch (err) {
        res.json({
            code: 400,
            message: err.message
        })
    }
}

studentCtrl.getAllStudentData = (req, res) => {
   
    try {
        student.find( (error, result) => {
            if(error) {
                console.log(error.message);
                res.json({
                    code:'400',
                    message:error.message
                })
            } 
            else {
                console.log(result);
                res.json({
                    code:'200',
                    message:"retrieved data",
                    data: result
                })
            }
        })
    }catch (err) {
        res.json({
            code: 400,
            message: err.message
        })
    }
}

studentCtrl.InsertStudentData = (req, res) => {
    let student_Data = new Obj(req.body);
    let student_data = {
        first_Name: student_Data.first_Name,
        last_Name: student_Data.last_Name,
        gender: student_Data.gender,
        Joining_Date: student_Data.Joining_Date,
        email: student_Data.email,
        mobile: student_Data.mobile,
        course: student_Data.course
    }
    try {
        student.insertMany(student_data, (error, result) => {
            if(error) {
                console.log(error.message);
                res.json({
                    code:'400',
                    message:error.message
                })
            } else {
                console.log(result);
                res.json({
                   
                    message: "Data Inserted"
                })
            }
        })
    }catch (err) {
        res.json({
            code: 400,
            message: err.message
        })
    }
}

studentCtrl.UpdateStudentData = (req, res) => {
    let student_Data = new Obj(req.body);
    let email = student_Data.email;
    let emailData = {
        email:  student_Data.email
    }
    try {
        student.updateOne(emailData,{ $set: student_Data }, (error, result) => {
          
            if(error) {
                console.log(error.message);
                
                res.json({
                    
                    code:'400',
                    message:error.message
                })
            } else {
                console.log(result);
                res.json({
                   
                    message: "Data Updated"
                })
            }
        })
    }catch (err) {
        res.json({
            code: 400,
            message: err.message
        })
    }
}

studentCtrl.DeleteStudentById = (req, res) => {
    let student_Data = new Obj(req.body);
    console.log('student_Data',student_Data);
    let emailData = {
        email:  student_Data.email
    }
   
    try {
        student.deleteOne(emailData, (error, result) => {
          
            if(error) {
                console.log(error.message);
                res.json({
                    code:'400',
                    message:error.message
                })
            } else {
                console.log(result.n);
                if(result.n == 1) {
                    res.json({
                        code:'200',
                        message: "Data Deleted successfully"
                    })
                } else {
                    res.json({
                        code:'204',
                        message:'Record not exists'
                    })
                }
                
            }
        })
    }catch (err) {
        res.json({
            code: 400,
            message: err.message
        })
    }
}

studentCtrl.DeleteStudentData = (req, res) => {
    let _Id = new Obj(req.body._id);
   
    try {
        student.deleteMany(_Id, (error, result) => {
          
            if(error) {
                console.log(error.message);
                res.json({
                    code:'400',
                    message:error.message
                })
            } else {
                console.log(result);
                res.json({
                   
                    message: "Data Deleted successfully"
                })
            }
        })
    }catch (err) {
        res.json({
            code: 400,
            message: err.message
        })
    }
}

export default studentCtrl;

