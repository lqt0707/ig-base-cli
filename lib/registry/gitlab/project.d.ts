interface IProjectList {
    pageSize?: number;
    pageNum?: number;
    access_token: string;
    userId?: string;
    id?: string;
}
/**
 * @description: 获取工程列表
 * @param {IProjectList} param1
 * @return {*}
 */
declare const getProjectList: ({ pageSize, pageNum, access_token, }: IProjectList) => Promise<{
    projectList: any;
}>;
/**
 * @description: 获取用户所属工程
 * @param {IProjectList} param1
 * @return {*}
 */
declare const getProjectByUser: ({ pageSize, pageNum, access_token, userId, }: IProjectList) => Promise<{
    projectList: any;
}>;
/**
 * @description: 获取工程
 * @param {IProjectList} param1
 * @return {*}
 */
declare const getProject: ({ id, access_token }: IProjectList) => Promise<any>;
/**
 * @description: 创建 gitLab 工程
 * @param {any} param1
 * @return {*}
 */
declare const createProjects: ({ gitParams }: any) => Promise<any>;
/**
 * @description: 删除 gitLab 工程保护分支
 * @param {number} projectId
 * @return {*}
 */
declare const deleteProtectedBranches: (projectId: number) => Promise<any>;
/**
 * @description: 设置 gitLab 工程保护分支
 * @param {number} projectId
 * @return {*}
 */
declare const protectedBranches: (projectId: number) => Promise<any>;
export { getProjectList, getProject, getProjectByUser, createProjects, deleteProtectedBranches, protectedBranches, };
