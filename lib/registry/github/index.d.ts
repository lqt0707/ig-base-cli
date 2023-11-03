import { ITpl } from "@/tpl";
export interface IBranch {
    name: string;
    commit: {
        sha: string;
        url: string;
    };
    protected: boolean;
}
/**
 * @description: 获取 github 项目分支
 * @param {ITpl} params
 * @return {*}
 */
export declare const getGithubBranch: (params: ITpl) => Promise<IBranch[] | undefined>;
declare const githubInit: () => Promise<void>;
export { githubInit };
