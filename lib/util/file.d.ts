export declare const loadFile: <T = {}>(path: string, system?: boolean) => false | T | undefined;
export declare const ConfigExist: <T = {}>(path: string) => boolean | T;
export declare const existsFile: (path: string, system?: boolean) => boolean;
export declare const writeFile: (path: string, fileName: string, file: object, system?: boolean) => void;
export declare const loadTsConfig: (path: string) => any;
