"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var v4_WASEvent;
(function (v4_WASEvent) {
    v4_WASEvent[v4_WASEvent["update-policy"] = 0] = "update-policy";
    v4_WASEvent[v4_WASEvent["login-fail"] = 1] = "login-fail";
    v4_WASEvent[v4_WASEvent["login-lock"] = 2] = "login-lock";
    v4_WASEvent[v4_WASEvent["signature-fail"] = 3] = "signature-fail";
    v4_WASEvent[v4_WASEvent["active-client"] = 4] = "active-client";
    v4_WASEvent[v4_WASEvent["update-wl-ext"] = 5] = "update-wl-ext";
    v4_WASEvent[v4_WASEvent["send-add-wl"] = 6] = "send-add-wl";
    v4_WASEvent[v4_WASEvent["send-delete-wl"] = 7] = "send-delete-wl";
    v4_WASEvent[v4_WASEvent["block-admin-alert"] = 8] = "block-admin-alert";
    v4_WASEvent[v4_WASEvent["update-exception-path"] = 9] = "update-exception-path";
    v4_WASEvent[v4_WASEvent["update-exception-process"] = 10] = "update-exception-process";
    v4_WASEvent[v4_WASEvent["upload-agent-log"] = 11] = "upload-agent-log";
    v4_WASEvent[v4_WASEvent["delete-agent"] = 12] = "delete-agent";
})(v4_WASEvent || (v4_WASEvent = {}));
exports.default = v4_WASEvent;
