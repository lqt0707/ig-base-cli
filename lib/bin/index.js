#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var module_alias_1 = __importDefault(require("module-alias"));
var commander_1 = require("commander");
var internally_1 = __importDefault(require("./internally"));
var extra_1 = require("./extra");
var packageConfig = require("../../package.json");
(0, module_alias_1.default)(path.resolve(__dirname, "../../"));
var program = new commander_1.Command(packageConfig.commandName);
var initCommand = function (commandConfig) {
    commandConfig.forEach(function (config) {
        var description = config.description, command = config.command, action = config.action;
        program
            .version(packageConfig.version)
            .description(description)
            .command(command)
            .action(function (value) {
            action(value);
        });
    });
};
var init = function () {
    var extraPacks = (0, extra_1.initExtraPack)();
    initCommand(__spreadArray(__spreadArray([], internally_1.default, true), extraPacks, true));
};
init();
program.parse(process.argv);
