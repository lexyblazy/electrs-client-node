import { TransactionApi } from "./transaction";
import { Config } from "./types";

export class Client {
  transaction: TransactionApi;

  constructor(config: Config) {
    this.transaction = new TransactionApi(config);
  }
}
