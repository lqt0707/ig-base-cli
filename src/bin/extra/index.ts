import { getPluginList } from "@/plugin";
import { ICommand } from "..";

const extraPack = getPluginList() as any[];

export const initExtraPack = () => {
  const extraPacks: ICommand[] = [];
  extraPack.forEach((extra) => {
    extraPacks.push(module.require(extra.name));
  });
  return extraPacks
};
