"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectTplCommand = exports.addTplCommand = void 0;
var inquirer_1 = __importDefault(require("@/inquirer"));
var addTpl = inquirer_1.default.addTpl, selectTpl = inquirer_1.default.selectTpl;
/**
 * @description: 添加模板
 * @param {*}
 * @return {*}
 */
exports.addTplCommand = {
    description: 'add tpl',
    command: 'add tpl',
    action: function () { return addTpl(); }
};
/**
* @description: 初始化模板
* @param {*}
* @return {*}
*/
exports.selectTplCommand = {
    description: 'init tpl',
    command: 'init tpl',
    action: function () { return selectTpl(); }
};
exports.default = [
    exports.addTplCommand,
    exports.selectTplCommand
];
