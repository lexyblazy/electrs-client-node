import { ApisauceInstance } from "apisauce";
import { Transaction } from "../transaction";
import { BlockInfo, BlockStatus } from "./types";
export declare class BlockApi {
    private api;
    constructor(apisauceInstance: ApisauceInstance);
    get(hash: string): Promise<BlockInfo | undefined>;
    getHeader(hash: string): Promise<string | undefined>;
    getStatus(hash: string): Promise<BlockStatus | undefined>;
    getTransactions(hash: string, startIndex?: number): Promise<Transaction[] | undefined>;
    getTransactionsIds(hash: string): Promise<string[] | undefined>;
    getTransactionIdAtIndex(hash: string, txIndex: number): Promise<string | undefined>;
    getRaw(hash: string): Promise<BinaryData | undefined>;
    getHash(height: number): Promise<string | undefined>;
    list(startingHeight?: number): Promise<BlockInfo[] | undefined>;
    getLatestHash(): Promise<BlockInfo[] | undefined>;
    getLatestHeight(): Promise<BlockInfo[] | undefined>;
}
