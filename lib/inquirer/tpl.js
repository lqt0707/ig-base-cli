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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectTpl = exports.addTpl = void 0;
var github_1 = require("@/registry/github");
var tpl_1 = require("@/tpl");
var util_1 = require("@/util");
var inquirer_1 = __importDefault(require("inquirer"));
var rxjs_1 = require("rxjs");
var tplList = (0, tpl_1.getTplList)();
/**
 * @description: 添加模板
 * @param {*}
 * @return {*}
 */
var addTpl = function () {
    var promptList = [
        {
            type: "input",
            message: "请输入仓库地址:",
            name: "tplUrl",
            default: "https://github.com/boty-design/react-tpl",
        },
        {
            type: "input",
            message: "模板标题(默认为 Git 名作为标题):",
            name: "name",
            default: function (_a) {
                var tplUrl = _a.tplUrl;
                return tplUrl.substring(tplUrl.lastIndexOf("/") + 1);
            },
        },
        {
            type: "input",
            message: "描述:",
            name: "desc",
        },
    ];
    inquirer_1.default.prompt(promptList).then(function (answers) {
        var tplUrl = answers.tplUrl, name = answers.name, desc = answers.desc;
        (0, tpl_1.updateTpl)({ tplUrl: tplUrl, name: name, desc: desc });
    });
};
exports.addTpl = addTpl;
/**
 * @description: 选择模板下载
 * @param {*}
 * @return {*}
 */
var selectTpl = function () { return __awaiter(void 0, void 0, void 0, function () {
    var prompts, select, githubName, path, loadUrl, onEachAnswer, onError, onCompleted;
    return __generator(this, function (_a) {
        prompts = new rxjs_1.Subject();
        try {
            onEachAnswer = function (result) { return __awaiter(void 0, void 0, void 0, function () {
                var name, answer, downloadUrl, org, branches;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            name = result.name, answer = result.answer;
                            if (!(name === "name")) return [3 /*break*/, 2];
                            githubName = answer;
                            select = tplList.filter(function (tpl) { return tpl.name === answer[0]; })[0];
                            downloadUrl = select.downloadUrl, org = select.org;
                            return [4 /*yield*/, (0, github_1.getGithubBranch)(select)];
                        case 1:
                            branches = (_a.sent());
                            loadUrl = "".concat(downloadUrl, "/").concat(org, "/zip/refs/heads");
                            if (branches.length === 1) {
                                loadUrl = "".concat(loadUrl, "/").concat(branches[0].name);
                                prompts.next({
                                    type: "input",
                                    message: "下载路径:",
                                    name: "path",
                                    default: githubName,
                                });
                            }
                            else {
                                prompts.next({
                                    type: "list",
                                    message: "请选择分支:",
                                    name: "branch",
                                    choices: branches.map(function (branch) { return branch.name; }),
                                });
                            }
                            _a.label = 2;
                        case 2:
                            if (name === "branch") {
                                loadUrl = "".concat(loadUrl, "/").concat(answer);
                                prompts.next({
                                    type: "input",
                                    message: "下载路径:",
                                    name: "path",
                                    default: githubName,
                                });
                            }
                            if (name === "path") {
                                path = answer;
                                prompts.complete();
                            }
                            return [2 /*return*/];
                    }
                });
            }); };
            onError = function (error) {
                (0, util_1.loggerError)(error);
            };
            onCompleted = function () {
                (0, tpl_1.loadTpl)(githubName, loadUrl, path);
            };
            inquirer_1.default
                .prompt(prompts)
                .ui.process.subscribe(onEachAnswer, onError, onCompleted);
            prompts.next({
                type: "list",
                message: "请选择模板:",
                name: "name",
                choices: tplList.map(function (tpl) { return tpl.name; }),
            });
        }
        catch (error) {
            (0, util_1.loggerError)(error);
        }
        return [2 /*return*/];
    });
}); };
exports.selectTpl = selectTpl;
