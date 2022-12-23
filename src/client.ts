import apisauce, { ApisauceInstance } from "apisauce";
import { AddressApi } from "./address";
import { TransactionApi } from "./transaction";
import { Config } from "./types";

export class Client {
  private api: ApisauceInstance;
  transaction: TransactionApi;
  address: AddressApi;

  constructor(config: Config) {
    this.api = apisauce.create({
      baseURL: `${config.ELECTRUM_SERVER_URL}`,
    });
    this.transaction = new TransactionApi(this.api);
    this.address = new AddressApi(this.api);
  }
}
