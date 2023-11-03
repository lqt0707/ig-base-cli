"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPluginCommand = void 0;
var inquirer_1 = __importDefault(require("@/inquirer"));
var registerPlugin = inquirer_1.default.registerPlugin;
exports.registerPluginCommand = {
    description: 'register plugin',
    command: 'register plugin',
    action: function () { return registerPlugin(); }
};
exports.default = [
    exports.registerPluginCommand
];
