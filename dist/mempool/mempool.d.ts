import { ApisauceInstance } from "apisauce";
import { MempoolStats, MempoolTransaction } from "./types";
export declare class MempoolApi {
    private api;
    constructor(apisauceInstance: ApisauceInstance);
    getStats(): Promise<MempoolStats | undefined>;
    getTxIds(): Promise<string[] | undefined>;
    getRecentTxs(): Promise<MempoolTransaction[] | undefined>;
}
