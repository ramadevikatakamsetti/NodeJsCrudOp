"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Obj = exports.Obj = function Obj(requestObj) {
    _classCallCheck(this, Obj);

    this.requestPayload = requestObj;
    return this.requestPayload;
};