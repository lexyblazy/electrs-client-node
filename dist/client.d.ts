import { AddressApi } from "./address";
import { TransactionApi } from "./transaction";
import { Config } from "./types";
export declare class Client {
    private api;
    transaction: TransactionApi;
    address: AddressApi;
    constructor(config: Config);
}
