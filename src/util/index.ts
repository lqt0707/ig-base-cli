import { resolve } from "path";

// 项目本地路径
export const getDirPath = (realPath: string = "") => {
  return resolve(__dirname, realPath);
};

// 获取运行路径
export const getCwdPath = (relPath: string = "") => {
  return resolve(process.cwd(), relPath);
};

export { loggerSuccess, loggerTiming, loggerError, loggerInfo, loggerWarring } from './logger'