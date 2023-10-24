"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validation_1 = require("../Validation");
var BaseEvent = /** @class */ (function () {
    function BaseEvent(props) {
        this.validation = new Validation_1.default(props);
    }
    BaseEvent.prototype.dataProcessing = function () { };
    return BaseEvent;
}());
exports.default = BaseEvent;
