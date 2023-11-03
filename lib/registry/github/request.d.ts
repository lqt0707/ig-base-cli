interface IMethodV {
    url: string;
    params?: object;
    query?: object;
}
declare const GET: <T>({ url, query }: IMethodV) => Promise<T>;
export { GET };
