import mongoose from 'mongoose';
let schema = mongoose.Schema;

let studentSchema = new schema({

    first_Name:{
        type:String,
        required:true,
        maxlength:50
    },
    last_Name:{
        type:String,
        required:true,
        maxlength:50
    },
    gender:{
        type:String,
        required:true,
       
    },
    Joining_Date:{
        type:Date,
        default:Date.now()
    },
    
    email:{
        type:String,
        required:true,
        unique:true,
        maxlength:50
    },
    mobile: {
        type: String,
        required: true
    },
    course:{
        type:String,
        required:true,
       
    }
   
})
const student = mongoose.model('Studentmodel', studentSchema);
export default student;