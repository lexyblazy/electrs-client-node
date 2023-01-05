import { ApisauceInstance } from "apisauce";
import { withErrorHandler } from "../utils";
import { MempoolStats, MempoolTransaction } from "./types";

export class MempoolApi {
  private api: ApisauceInstance;

  constructor(apisauceInstance: ApisauceInstance) {
    this.api = apisauceInstance;
  }

  async getStats() {
    return withErrorHandler(() => this.api.get<MempoolStats>(`/mempool`));
  }

  async getTxIds() {
    return withErrorHandler(() => this.api.get<string[]>(`/mempool/txids`));
  }

  async getRecentTxs(){
    return withErrorHandler(() => this.api.get<MempoolTransaction[]>(`/mempool/recent`));

  }
}
