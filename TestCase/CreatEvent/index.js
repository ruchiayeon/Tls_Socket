"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreatEvent = /** @class */ (function () {
    function CreatEvent() {
        this.eventClass = {};
    }
    CreatEvent.prototype.addEvent = function (props) {
        var name = props.name, classObject = props.classObject;
        if (classObject.prototype.dataProcessing) {
            console.log("".concat(name, " \uC774\uBCA4\uD2B8 \uAC1D\uCCB4 \uBAA9\uB85D\uD654"));
            this.eventClass[name] = classObject;
            return;
        }
        return;
    };
    CreatEvent.prototype.createEventClass = function (props) {
        var name = props.name, options = props.options;
        var ClassMethod = this.eventClass[name];
        console.log("".concat(name, " \uC774\uBCA4\uD2B8 \uAC1D\uCCB4 \uC0DD\uC131"));
        return ClassMethod ? new ClassMethod(options) : null;
    };
    return CreatEvent;
}());
exports.default = CreatEvent;
