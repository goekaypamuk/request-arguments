export declare function requestArguments(params: Array<Param>): Promise<any>;
export interface Param {
    name: string;
    description: string;
    short: string;
    mandatory: boolean;
}
