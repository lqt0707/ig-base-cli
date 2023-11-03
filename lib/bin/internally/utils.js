"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkVersionCommand = void 0;
var index_1 = require("@/index");
/**
 * @description: 添加模板
 * @param {*}
 * @return {*}
 */
exports.checkVersionCommand = {
    description: "check cli version",
    command: "check",
    action: function () { return (0, index_1.checkVersion)(); },
};
exports.default = [exports.checkVersionCommand];
