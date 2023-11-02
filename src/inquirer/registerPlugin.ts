import { updatePlugin } from "@/plugin";
import { loggerSuccess } from "@/util";
import { existNpm, npmInstall } from "@/util/npm";
import inquirer from "inquirer";

const promptList = [
  {
    type: "input",
    message: "请输入插件名称",
    name: "pluginName",
    default: "ig-plugin-eslint",
    validate(v: string) {
      return v.includes("fe-plugin-");
    },
    transformer(v: string) {
      return `@ignition-space/${v}`;
    },
  },
];

export const registerPlugin = () => {
  inquirer.prompt(promptList).then(async (answers: any) => {
    const { pluginName } = answers;
    const exist = await existNpm(`@ignition-space/${pluginName}`);
    const totalName = `@ignition-space/${pluginName}`;
    if (exist) {
      npmInstall(totalName);
      loggerSuccess(totalName + ` register successful`);
      updatePlugin({ name: totalName });
    }
  });
};
