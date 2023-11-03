"use strict";
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
var build_1 = __importDefault(require("./build"));
var tpl_1 = __importDefault(require("./tpl"));
var git_1 = __importDefault(require("./git"));
var safety_1 = __importDefault(require("./safety"));
var register_1 = __importDefault(require("./register"));
var utils_1 = __importDefault(require("./utils"));
exports.default = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], build_1.default, true), safety_1.default, true), git_1.default, true), tpl_1.default, true), register_1.default, true), utils_1.default, true);
