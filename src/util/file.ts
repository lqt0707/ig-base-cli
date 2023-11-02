import os from "os";
import fs from "fs-extra";
import { loggerError, loggerInfo, loggerSuccess } from "./logger";
import { getCwdPath, getDirPath } from ".";
import { register } from "ts-node";

// 导入文件
export const loadFile = <T = {}>(
  path: string,
  system: boolean = true
): T | false | undefined => {
  const rePath = system ? `${os.homedir()}/${path}` : path;

  try {
    if (!fs.existsSync(rePath)) {
      return false;
    }
    const data = fs.readJSONSync(rePath);
    return data;
  } catch (error) {
    loggerError(`Error reading file from disk: ${rePath}`);
  }
};

export const ConfigExist = <T = {}>(path: string): T | boolean => {
  const rePath = getCwdPath(path);
  loggerInfo(rePath);
  return !!fs.pathExistsSync(rePath);
};

export const existsFile = (path: string, system: boolean = true) => {
  const rePath = system ? `${os.homedir()}/${path}` : path;
  loggerInfo(rePath);
  return fs.pathExistsSync(rePath);
};

// 写入文件
export const writeFile = (
  path: string,
  fileName: string,
  file: object,
  system: boolean = true
) => {
  const rePath = system ? `${os.homedir()}/${path}` : path;
  loggerInfo(rePath);
  try {
    fs.outputJSONSync(`${rePath}/${fileName}`, file);
    loggerSuccess("Writing file successful!");
  } catch (err) {
    loggerError(`Error writing file from disk: ${err}`);
  }
};


// 解析 ts 配置文件
export const loadTsConfig = (path: string) => {
  // 读取并解析 TypeScript 配置文件
  const configPath = getDirPath("../../tsconfig.json");

  // 读取并解析 TypeScript 配置文件
  // 注册 ts-node
  register({
    project: configPath,
  });

  // 加载并执行你的 TypeScript 配置文件
  const config = require(getCwdPath(path)).default;

  // 处理配置文件的逻辑
  return config;
};
