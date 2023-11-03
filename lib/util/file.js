"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTsConfig = exports.writeFile = exports.existsFile = exports.ConfigExist = exports.loadFile = void 0;
var os_1 = __importDefault(require("os"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var logger_1 = require("./logger");
var _1 = require(".");
var ts_node_1 = require("ts-node");
// 导入文件
var loadFile = function (path, system) {
    if (system === void 0) { system = true; }
    var rePath = system ? "".concat(os_1.default.homedir(), "/").concat(path) : path;
    try {
        if (!fs_extra_1.default.existsSync(rePath)) {
            return false;
        }
        var data = fs_extra_1.default.readJSONSync(rePath);
        return data;
    }
    catch (error) {
        (0, logger_1.loggerError)("Error reading file from disk: ".concat(rePath));
    }
};
exports.loadFile = loadFile;
var ConfigExist = function (path) {
    var rePath = (0, _1.getCwdPath)(path);
    (0, logger_1.loggerInfo)(rePath);
    return !!fs_extra_1.default.pathExistsSync(rePath);
};
exports.ConfigExist = ConfigExist;
var existsFile = function (path, system) {
    if (system === void 0) { system = true; }
    var rePath = system ? "".concat(os_1.default.homedir(), "/").concat(path) : path;
    (0, logger_1.loggerInfo)(rePath);
    return fs_extra_1.default.pathExistsSync(rePath);
};
exports.existsFile = existsFile;
// 写入文件
var writeFile = function (path, fileName, file, system) {
    if (system === void 0) { system = true; }
    var rePath = system ? "".concat(os_1.default.homedir(), "/").concat(path) : path;
    (0, logger_1.loggerInfo)(rePath);
    try {
        fs_extra_1.default.outputJSONSync("".concat(rePath, "/").concat(fileName), file);
        (0, logger_1.loggerSuccess)("Writing file successful!");
    }
    catch (err) {
        (0, logger_1.loggerError)("Error writing file from disk: ".concat(err));
    }
};
exports.writeFile = writeFile;
// 解析 ts 配置文件
var loadTsConfig = function (path) {
    // 读取并解析 TypeScript 配置文件
    var configPath = (0, _1.getDirPath)("../../tsconfig.json");
    // 读取并解析 TypeScript 配置文件
    // 注册 ts-node
    (0, ts_node_1.register)({
        project: configPath,
    });
    // 加载并执行你的 TypeScript 配置文件
    var config = require((0, _1.getCwdPath)(path)).default;
    // 处理配置文件的逻辑
    return config;
};
exports.loadTsConfig = loadTsConfig;
