"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGit = void 0;
var github_1 = require("@/registry/github");
var gitlab_1 = require("@/registry/gitlab");
var inquirer_1 = __importDefault(require("inquirer"));
var promptList = [
    {
        type: "list",
        message: "请选择仓库类型:",
        name: "gitType",
        choices: ["gitlab", "github"],
    },
    {
        type: "input",
        message: "请输入 Git 地址:",
        name: "gitUrl",
        default: "http://gitlab.cookieboty.com",
    },
    {
        type: "input",
        message: "请输入用户名:",
        name: "username",
        default: "CookieBoty",
    },
    {
        type: "password",
        message: "密码:",
        name: "password",
    },
];
var initGit = function () {
    inquirer_1.default.prompt(promptList).then(function (answers) {
        var gitType = answers.gitType, gitUrl = answers.gitUrl, username = answers.username, password = answers.password;
        switch (gitType) {
            case "gitlab":
                (0, gitlab_1.gitLabInit)(gitUrl, username, password);
                break;
            case "github":
                (0, github_1.githubInit)();
                break;
            default:
                (0, gitlab_1.gitLabInit)(gitUrl, username, password);
                break;
        }
    });
};
exports.initGit = initGit;
