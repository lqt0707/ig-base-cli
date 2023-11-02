import { methodV } from "./request";

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

// 获取分支列表
const getBranchList = async ({
  pageSize,
  pageNum,
  projectId,
  access_token,
}: IBranchList) => {
  try {
    const { data, code } = await methodV({
      url: `/projects/${projectId}/repository/branches`,
      method: "GET",
      query: {
        per_page: pageSize,
        page: pageNum,
        access_token,
      },
    });
    if (code === 200) {
      return data;
    } else {
      return { msg: data };
    }
  } catch (error) {
    return { msg: error };
  }
};

/**
 * @description: 获取单个分支信息
 * @param {IBranchList} param1
 * @return {*}
 */
const getBranch = async ({ projectId, branch }: IBranchList) => {
  const { code, data } = await methodV({
    url: `/projects/${projectId}/repository/branches/${branch}`,
    method: "GET",
  });
  return data;
};

/**
 * @description: 创建分支
 * @param {IBranchList} param1
 * @return {*}
 */
const createBranch = async ({
  ref,
  projectId,
  branch,
  access_token,
}: IBranchList) => {
  const { code, data } = await methodV({
    url: `/projects/${projectId}/repository/branches`,
    params: {
      ref,
      branch,
    },
    query: { access_token },
    method: "POST",
  });
  return data;
};

/**
 * @description: 删除分支
 * @param {IBranchList} param1
 * @return {*}
 */
const delBranch = async ({ projectId, branch = "" }: IBranchList) => {
  const { code, data } = await methodV({
    url: `/projects/${projectId}/repository/branches/${encodeURIComponent(
      branch
    )}`,
    method: "DELETE",
  });
  return data;
};

export { getBranchList, createBranch, getBranch, delBranch };
