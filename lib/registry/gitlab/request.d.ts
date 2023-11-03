interface IMethodV {
    GIT_URL?: string;
    url: string;
    method?: string;
    params?: object;
    query?: object;
}
interface IRequest {
    data: any;
    code: number;
}
declare const gitPost: <T>({ GIT_URL, url, method, params, query, }: IMethodV) => Promise<T>;
/**
 * @description: 带 version 的通用 api 请求
 */
declare const methodV: ({ GIT_URL, url, method, params, query }: IMethodV) => Promise<IRequest>;
export { gitPost, methodV };
