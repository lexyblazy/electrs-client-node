import { AddressApi } from "./address";
import { TransactionApi } from "./transaction";
import { Config } from "./types";

export class Client {
  transaction: TransactionApi;
  address: AddressApi;

  constructor(config: Config) {
    this.transaction = new TransactionApi(config);
    this.address = new AddressApi(config);
  }
}
