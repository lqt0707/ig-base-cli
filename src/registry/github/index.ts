import { ITpl } from "@/tpl";
import { GET } from "./request";
import { loggerError } from "@/util";

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
export const getGithubBranch = async (params: ITpl) => {
  try {
    const { apiUrl, org } = params;
    const url = `${apiUrl}/repos/${org}/branches`;
    const res = await GET<IBranch[]>({ url });
    if (Array.isArray(res)) {
      return res;
    }
    loggerError(JSON.stringify(res));
    process.exit(1);
  } catch (error) {
    loggerError(error);
  }
};

const githubInit = async () => {};

export { githubInit };
