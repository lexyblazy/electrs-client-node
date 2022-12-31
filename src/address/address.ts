import { ApisauceInstance } from "apisauce";
import { Transaction, Utxo } from "../transaction";
import { withErrorHandler } from "../utils";
import { AddressInfo } from "./types";

export class AddressApi {
  private api: ApisauceInstance;

  constructor(apisauceInstance: ApisauceInstance) {
    this.api = apisauceInstance;
  }

  async getInfo(address: string) {
    return withErrorHandler(() => this.api.get<AddressInfo>(`/address/${address}`));
  }

  async getTransactions(address: string, lastSeenTxId?: string) {
    return withErrorHandler(() => {
      if (lastSeenTxId) {
        return this.api.get<Transaction[]>(`/address/${address}/txs/chain/${lastSeenTxId}`);
      }

      return this.api.get<Transaction[]>(`/address/${address}/txs`);
    });
  }

  async getMempoolTransactions(address: string) {
    return withErrorHandler(() => this.api.get<Transaction[]>(`/address/${address}/txs/mempool`));
  }

  async getUtxo(address: string) {
    return withErrorHandler(() => this.api.get<Utxo[]>(`/address/${address}/utxo`));
  }

  async getByPrefix(prefix: string) {
    return withErrorHandler(() => this.api.get<AddressInfo[]>(`/address-prefix/${prefix}`));
  }
}
