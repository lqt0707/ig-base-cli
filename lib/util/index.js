"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerWarring = exports.loggerInfo = exports.loggerError = exports.loggerTiming = exports.loggerSuccess = exports.getCwdPath = exports.getDirPath = void 0;
var path_1 = require("path");
// 项目本地路径
var getDirPath = function (realPath) {
    if (realPath === void 0) { realPath = ""; }
    return (0, path_1.resolve)(__dirname, realPath);
};
exports.getDirPath = getDirPath;
// 获取运行路径
var getCwdPath = function (relPath) {
    if (relPath === void 0) { relPath = ""; }
    return (0, path_1.resolve)(process.cwd(), relPath);
};
exports.getCwdPath = getCwdPath;
var logger_1 = require("./logger");
Object.defineProperty(exports, "loggerSuccess", { enumerable: true, get: function () { return logger_1.loggerSuccess; } });
Object.defineProperty(exports, "loggerTiming", { enumerable: true, get: function () { return logger_1.loggerTiming; } });
Object.defineProperty(exports, "loggerError", { enumerable: true, get: function () { return logger_1.loggerError; } });
Object.defineProperty(exports, "loggerInfo", { enumerable: true, get: function () { return logger_1.loggerInfo; } });
Object.defineProperty(exports, "loggerWarring", { enumerable: true, get: function () { return logger_1.loggerWarring; } });
