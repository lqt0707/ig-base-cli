import inquirer from '@/inquirer';

const { registerPlugin } = inquirer

export const registerPluginCommand = {
  description: 'register plugin',
  command: 'register plugin',
  action: () => registerPlugin()
}

export default [
  registerPluginCommand
]
