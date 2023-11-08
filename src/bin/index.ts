#!/usr/bin/env node

import * as path from "path";
import alias from "module-alias";
import { Command } from "commander";
import internallyCommand from "./internally";
import { initExtraPack } from "./extra";

const packageConfig = require("../../package.json");

alias(path.resolve(__dirname, "../../"));
const program = new Command(packageConfig.commandName);

export interface ICommand {
  description: string;
  command: string;
  action: (value?: any) => void;
}

const initCommand = (commandConfig: ICommand[]) => {
  commandConfig.forEach((config) => {
    const { description, command, action } = config;
    program
      .version(packageConfig.version)
      .description(description)
      .command(command)
      .action((value) => {
        action(value);
      });
  });
};

const init = () => {
  const extraPacks = initExtraPack();
  initCommand([...internallyCommand, ...extraPacks]);
};

init();

program.parse(process.argv);
