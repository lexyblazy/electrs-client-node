import apisauce, { ApisauceInstance } from "apisauce";
import { AddressApi } from "./address";
import { BlockApi } from "./block";
import { FeeApi } from "./fee";
import { MempoolApi } from "./mempool";
import { TransactionApi } from "./transaction";
import { Config } from "./types";

export class Client {
  private api: ApisauceInstance;
  transaction: TransactionApi;
  address: AddressApi;
  block: BlockApi;
  mempool: MempoolApi;
  fee: FeeApi;

  constructor(config: Config) {
    this.api = apisauce.create({
      baseURL: `${config.ELECTRUM_SERVER_URL}`,
    });
    this.transaction = new TransactionApi(this.api);
    this.address = new AddressApi(this.api);
    this.block = new BlockApi(this.api);
    this.mempool = new MempoolApi(this.api);
    this.fee = new FeeApi(this.api);
  }
}
