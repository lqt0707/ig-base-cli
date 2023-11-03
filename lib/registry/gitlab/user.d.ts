interface IToken {
    access_token: string;
    token_type: string;
    refresh_token: string;
    scope: string;
    create_at: number;
}
export declare const getToken: (gitUrl: string, username: string, password: string) => Promise<IToken>;
export {};
