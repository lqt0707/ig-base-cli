export interface IPlugin {
    name: string;
}
export declare const updatePlugin: (params: IPlugin) => Promise<void>;
export declare const getPluginList: () => IPlugin[] | undefined;
