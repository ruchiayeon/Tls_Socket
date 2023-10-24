"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate_1 = require("validate");
var Validation = /** @class */ (function () {
    function Validation(props) {
        this.data = props.data;
        this.socket = props.socket;
        this.validateResult = false;
        this.schma = {};
        this.errorList = [];
    }
    Validation.prototype.vaildCheck = function () {
        var schma = new validate_1.default(this.schma);
        this.errorList = schma.validate(this.data);
        console.log("".concat(this.data.event, " vaildCheck"));
        return;
    };
    Validation.prototype.vaildCheckResult = function () {
        console.log("".concat(this.data.event, " vaildCheckResult"));
        // const toFail = JSON.stringify({ event: this._data.event, result: 'false' });
        if (this.errorList.length > 0) {
            //uid data format check
            console.log(this.errorList);
            this.validateResult = false;
            // this._socket.write(toFail);
            // this._socket.end();
            return;
        }
        this.validateResult = true;
        return;
    };
    return Validation;
}());
exports.default = Validation;
