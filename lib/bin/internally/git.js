"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGitCommand = void 0;
var inquirer_1 = __importDefault(require("@/inquirer"));
var initGit = inquirer_1.default.initGit;
/**
 * @description: git 初始化
 * @param {*}
 * @return {*}
 */
exports.initGitCommand = {
    description: 'git init',
    command: 'git init',
    action: function () { return initGit(); }
};
exports.default = [
    exports.initGitCommand
];
