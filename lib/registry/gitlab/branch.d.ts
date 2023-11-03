interface IBranchList {
    pageSize?: number;
    pageNum?: number;
    access_token: string;
    userId?: string;
    id?: string;
    projectId?: string;
    branch?: string;
    ref?: string;
}
declare const getBranchList: ({ pageSize, pageNum, projectId, access_token, }: IBranchList) => Promise<any>;
/**
 * @description: 获取单个分支信息
 * @param {IBranchList} param1
 * @return {*}
 */
declare const getBranch: ({ projectId, branch }: IBranchList) => Promise<any>;
/**
 * @description: 创建分支
 * @param {IBranchList} param1
 * @return {*}
 */
declare const createBranch: ({ ref, projectId, branch, access_token, }: IBranchList) => Promise<any>;
/**
 * @description: 删除分支
 * @param {IBranchList} param1
 * @return {*}
 */
declare const delBranch: ({ projectId, branch }: IBranchList) => Promise<any>;
export { getBranchList, createBranch, getBranch, delBranch };
