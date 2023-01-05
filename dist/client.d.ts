import { AddressApi } from "./address";
import { BlockApi } from "./block";
import { FeeApi } from "./fee";
import { MempoolApi } from "./mempool";
import { TransactionApi } from "./transaction";
import { Config } from "./types";
export declare class Client {
    private api;
    transaction: TransactionApi;
    address: AddressApi;
    block: BlockApi;
    mempool: MempoolApi;
    fee: FeeApi;
    constructor(config: Config);
}
