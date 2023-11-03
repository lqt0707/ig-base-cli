"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerError = exports.loggerSuccess = exports.loggerWarring = exports.loggerInfo = exports.loggerTiming = void 0;
var chalk_1 = __importDefault(require("chalk"));
// 计时日志
var loggerTiming = function (str, start) {
    if (str === void 0) { str = ""; }
    if (start === void 0) { start = true; }
    if (start) {
        console.time("Timing");
        console.log(chalk_1.default.cyan("****** ".concat(str, " START ******")));
    }
    else {
        console.log(chalk_1.default.cyan("****** ".concat(str, " END ******")));
        console.timeEnd("Timing");
    }
};
exports.loggerTiming = loggerTiming;
// 普通日志
var loggerInfo = function (str) {
    console.log(chalk_1.default.green("[INFO]\uFF1A ".concat(str)));
};
exports.loggerInfo = loggerInfo;
// 警告日志
var loggerWarring = function (str) {
    console.log(chalk_1.default.yellowBright("[WARRING]\uFF1A ".concat(str)));
};
exports.loggerWarring = loggerWarring;
// 成功日志
var loggerSuccess = function (str) {
    console.log(chalk_1.default.greenBright("[SUCCESS]\uFF1A ".concat(str)));
};
exports.loggerSuccess = loggerSuccess;
// 报错日志
var loggerError = function (str) {
    console.log(chalk_1.default.redBright("[ERROR]\uFF1A ".concat(str)));
};
exports.loggerError = loggerError;
