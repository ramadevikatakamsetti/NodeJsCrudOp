'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = _mongoose2.default.Schema;

var studentSchema = new schema({

    first_Name: {
        type: String,
        required: true,
        maxlength: 50
    },
    last_Name: {
        type: String,
        required: true,
        maxlength: 50
    },
    gender: {
        type: String,
        required: true

    },
    Joining_Date: {
        type: Date,
        default: Date.now()
    },

    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    mobile: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true

    }

});
var student = _mongoose2.default.model('Studentmodel', studentSchema);
exports.default = student;