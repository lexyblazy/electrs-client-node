import { ApisauceInstance } from "apisauce";
import { Transaction, Utxo } from "../transaction";
import { AddressInfo } from "./types";
export declare class AddressApi {
    private api;
    constructor(apisauceInstance: ApisauceInstance);
    getInfo(address: string): Promise<AddressInfo | undefined>;
    getTransactions(address: string, lastSeenTxId?: string): Promise<Transaction[] | undefined>;
    getMempoolTransactions(address: string): Promise<Transaction[] | undefined>;
    getUtxo(address: string): Promise<Utxo[] | undefined>;
    getByPrefix(prefix: string): Promise<AddressInfo[] | undefined>;
}
