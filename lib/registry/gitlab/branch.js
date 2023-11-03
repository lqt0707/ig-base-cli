"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delBranch = exports.getBranch = exports.createBranch = exports.getBranchList = void 0;
var request_1 = require("./request");
// 获取分支列表
var getBranchList = function (_a) {
    var pageSize = _a.pageSize, pageNum = _a.pageNum, projectId = _a.projectId, access_token = _a.access_token;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, data, code, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, request_1.methodV)({
                            url: "/projects/".concat(projectId, "/repository/branches"),
                            method: "GET",
                            query: {
                                per_page: pageSize,
                                page: pageNum,
                                access_token: access_token,
                            },
                        })];
                case 1:
                    _b = _c.sent(), data = _b.data, code = _b.code;
                    if (code === 200) {
                        return [2 /*return*/, data];
                    }
                    else {
                        return [2 /*return*/, { msg: data }];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _c.sent();
                    return [2 /*return*/, { msg: error_1 }];
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.getBranchList = getBranchList;
/**
 * @description: 获取单个分支信息
 * @param {IBranchList} param1
 * @return {*}
 */
var getBranch = function (_a) {
    var projectId = _a.projectId, branch = _a.branch;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, code, data;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, request_1.methodV)({
                        url: "/projects/".concat(projectId, "/repository/branches/").concat(branch),
                        method: "GET",
                    })];
                case 1:
                    _b = _c.sent(), code = _b.code, data = _b.data;
                    return [2 /*return*/, data];
            }
        });
    });
};
exports.getBranch = getBranch;
/**
 * @description: 创建分支
 * @param {IBranchList} param1
 * @return {*}
 */
var createBranch = function (_a) {
    var ref = _a.ref, projectId = _a.projectId, branch = _a.branch, access_token = _a.access_token;
    return __awaiter(void 0, void 0, void 0, function () {
        var _b, code, data;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, request_1.methodV)({
                        url: "/projects/".concat(projectId, "/repository/branches"),
                        params: {
                            ref: ref,
                            branch: branch,
                        },
                        query: { access_token: access_token },
                        method: "POST",
                    })];
                case 1:
                    _b = _c.sent(), code = _b.code, data = _b.data;
                    return [2 /*return*/, data];
            }
        });
    });
};
exports.createBranch = createBranch;
/**
 * @description: 删除分支
 * @param {IBranchList} param1
 * @return {*}
 */
var delBranch = function (_a) {
    var projectId = _a.projectId, _b = _a.branch, branch = _b === void 0 ? "" : _b;
    return __awaiter(void 0, void 0, void 0, function () {
        var _c, code, data;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, (0, request_1.methodV)({
                        url: "/projects/".concat(projectId, "/repository/branches/").concat(encodeURIComponent(branch)),
                        method: "DELETE",
                    })];
                case 1:
                    _c = _d.sent(), code = _c.code, data = _c.data;
                    return [2 /*return*/, data];
            }
        });
    });
};
exports.delBranch = delBranch;
