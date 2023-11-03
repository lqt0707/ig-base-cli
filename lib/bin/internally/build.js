"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildFlowCommand = void 0;
var build_1 = require("@/build");
/**
 * @description: 流程编排
 * @param {*}
 * @return {*}
 */
exports.BuildFlowCommand = {
    description: 'buildFlow',
    command: 'buildFlow',
    action: function () { return (0, build_1.buildFlow)(); }
};
exports.default = [
    exports.BuildFlowCommand
];
