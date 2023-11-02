import { githubInit } from "@/registry/github";
import { gitLabInit } from "@/registry/gitlab";
import inquirer from "inquirer";

const promptList = [
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

export const initGit = () => {
  inquirer.prompt(promptList).then((answers: any) => {
    const { gitType, gitUrl, username, password } = answers;

    switch (gitType) {
      case "gitlab":
        gitLabInit(gitUrl, username, password);
        break;
      case "github":
        githubInit();
        break;
      default:
        gitLabInit(gitUrl, username, password)
        break;
    }
  });
};
