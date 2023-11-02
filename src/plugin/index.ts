import { loggerError, loggerSuccess } from "@/util";
import { loadFile, writeFile } from "@/util/file";

export interface IPlugin {
  name: string;
}

const cacheTpl = ".igCache";

// 添加插件信息
export const updatePlugin = async (params: IPlugin) => {
  const { name } = params;
  let isExist = false;
  try {
    const pluginConfig = loadFile<IPlugin[]>(`${cacheTpl}/.plugin.json`);
    let file = [{ name }];
    if (pluginConfig) {
      isExist = pluginConfig.some((tpl) => tpl.name === name);
      if (!isExist) {
        file = [...pluginConfig, { name }];
      }
    }
    writeFile(cacheTpl, ".plugin.json", file);
    loggerSuccess(`${isExist ? "Update" : "Add"} Template Successful!`);
  } catch (error) {
    loggerError(error);
  }
};

// 获取插件列表
export const getPluginList = () => {
  try {
    const pluginConfig = loadFile<IPlugin[]>(`${cacheTpl}/.plugin.json`);
    if (pluginConfig) {
      return pluginConfig;
    }
    return [];
  } catch (error) {
    loggerError(error);
  }
};
