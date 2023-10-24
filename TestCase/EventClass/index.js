"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventMethodCase = void 0;
var BaseEvent_1 = require("../BaseEvent");
var CreatEvent_1 = require("../CreatEvent");
var SendEventList_1 = require("../SendEventList");
//BaseEvent 상속
var EUpdateSocketConnected = /** @class */ (function (_super) {
    __extends(EUpdateSocketConnected, _super);
    function EUpdateSocketConnected(props) {
        var _this = _super.call(this, props) || this;
        _this.validation.schma = {
            event: {
                type: String,
                required: true,
                length: { min: 1 },
            },
            gid: {
                type: String,
                required: true,
                length: { min: 1, max: 12 },
            },
            uid: {
                type: String,
                required: true,
                length: { min: 1, max: 130 },
            },
        };
        return _this;
    }
    EUpdateSocketConnected.prototype.dataProcessing = function () {
        if (this.validation.validateResult) {
            console.log("".concat(this.validation.data.event, " dataProcessing"));
            console.log("========[ ".concat(this.validation.data.event, " Process \uC644\uB8CC ]======="));
            console.log('\n\n');
            return;
        }
        console.log("========[ ".concat(this.validation.data.event, " Process \uC2E4\uD328 ]======="));
        console.log('\n\n');
        return;
    };
    return EUpdateSocketConnected;
}(BaseEvent_1.default));
var EDelSocketConnected = /** @class */ (function (_super) {
    __extends(EDelSocketConnected, _super);
    function EDelSocketConnected(props) {
        var _this = _super.call(this, props) || this;
        _this.validation.vaildCheck = function () {
            console.log("".concat(_this.validation.data.event, " vaildCheck"));
            return;
        };
        _this.validation.vaildCheckResult = function () {
            console.log("".concat(_this.validation.data.event, " vaildCheckResult"));
            return;
        };
        return _this;
    }
    EDelSocketConnected.prototype.dataProcessing = function () {
        console.log("".concat(this.validation.data.event, " dataProcessing"));
        console.log("========[ ".concat(this.validation.data.event, " Process \uC644\uB8CC ]======="));
        return;
    };
    return EDelSocketConnected;
}(BaseEvent_1.default));
var ECheckConnectAdmin = /** @class */ (function (_super) {
    __extends(ECheckConnectAdmin, _super);
    function ECheckConnectAdmin(props) {
        var _this = _super.call(this, props) || this;
        _this.validation.vaildCheck = function () {
            console.log("".concat(_this.validation.data.event, " vaildCheck"));
            return;
        };
        _this.validation.vaildCheckResult = function () {
            console.log("".concat(_this.validation.data.event, " vaildCheckResult"));
            return;
        };
        return _this;
    }
    ECheckConnectAdmin.prototype.dataProcessing = function () {
        console.log("".concat(this.validation.data.event, " dataProcessing"));
        console.log("========[ ".concat(this.validation.data.event, " Process \uC644\uB8CC ]======="));
        return;
    };
    return ECheckConnectAdmin;
}(BaseEvent_1.default));
var ESendSocketEvent = /** @class */ (function (_super) {
    __extends(ESendSocketEvent, _super);
    function ESendSocketEvent(props) {
        var _this = _super.call(this, props) || this;
        _this.validation.vaildCheck = function () {
            return;
        };
        _this.validation.vaildCheckResult = function () {
            return;
        };
        return _this;
    }
    ESendSocketEvent.prototype.dataProcessing = function () {
        console.log("".concat(this.validation.data.event, " dataProcessing"));
        console.log("========[ ".concat(this.validation.data.event, " Process \uC644\uB8CC ]======="));
        return;
    };
    return ESendSocketEvent;
}(BaseEvent_1.default));
//CreateEvent : 이벤트 객체 목록화
exports.eventMethodCase = new CreatEvent_1.default();
//Bridge Server에서 처리할 이벤트
exports.eventMethodCase.addEvent({ name: 'update-socket-connected', classObject: EUpdateSocketConnected });
exports.eventMethodCase.addEvent({ name: 'del-socket-connected', classObject: EDelSocketConnected });
exports.eventMethodCase.addEvent({ name: 'check-connect-admin', classObject: ECheckConnectAdmin });
//v4_WASEvent 공통 class를 사용
var v4_WASEventList = Object.keys(SendEventList_1.default).filter(function (event) { return isNaN(Number(event)); });
//enum 이벤트 객체 목록화
v4_WASEventList.map(function (event) {
    exports.eventMethodCase.addEvent({ name: event, classObject: ESendSocketEvent });
});
console.log('\n');
console.log('=========[ CreateEvent에 저장된 이벤트 & 객체 ]===========');
console.log('\n');
console.log(exports.eventMethodCase.eventClass);
console.log('\n');
