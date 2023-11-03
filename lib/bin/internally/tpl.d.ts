/**
 * @description: 添加模板
 * @param {*}
 * @return {*}
 */
export declare const addTplCommand: {
    description: string;
    command: string;
    action: () => void;
};
/**
* @description: 初始化模板
* @param {*}
* @return {*}
*/
export declare const selectTplCommand: {
    description: string;
    command: string;
    action: () => Promise<void>;
};
declare const _default: {
    description: string;
    command: string;
    action: () => void;
}[];
export default _default;
