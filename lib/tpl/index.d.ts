export interface ITpl {
    tplUrl: string;
    name: string;
    desc: string;
    org?: string;
    downloadUrl?: string;
    apiUrl?: string;
}
export declare const updateTpl: (params: ITpl) => Promise<void>;
/**
 * @description: 获取模板列表
 * @param {*}
 * @return {*}
 */
export declare const getTplList: () => ITpl[] | undefined;
export declare const loadTpl: (name: string, downloadUrl: string, path: string) => void;
