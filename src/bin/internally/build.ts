import { buildFlow } from "@/build"

/**
 * @description: 流程编排
 * @param {*}
 * @return {*}
 */
export const BuildFlowCommand = {
  description: 'buildFlow',
  command: 'buildFlow',
  action: () => buildFlow()
}

export default [
  BuildFlowCommand
]
