import apisauce, { ApisauceInstance } from "apisauce";
import { Transaction } from "../transaction";
import { Config } from "../types";
import { withErrorHandler } from "../utils";
import { AddressInfo } from "./types";

export class AddressApi {
  private api: ApisauceInstance;

  constructor(config: Config) {
    this.api = apisauce.create({
      baseURL: `${config.ELECTRUM_SERVER_URL}/address`,
    });
  }

  async getInfo(address: string) {
    return withErrorHandler(() => this.api.get<AddressInfo>(`/${address}`));
  }

  async getTransactions(address: string, lastSeenTxId?: string) {
    return withErrorHandler(() => {
      if (lastSeenTxId) {
        return this.api.get<Transaction[]>(`/${address}/txs/chain/${lastSeenTxId}`);
      }

      return this.api.get<Transaction[]>(`/${address}/txs`);
    });
  }

  async getMempoolTransactions(address: string) {
    return withErrorHandler(() => this.api.get<Transaction[]>(`/${address}/txs/mempool`));
  }
}
