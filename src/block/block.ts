import { ApisauceInstance } from "apisauce";
import { Transaction } from "../transaction";
import { withErrorHandler } from "../utils";
import { BlockInfo, BlockStatus } from "./types";

export class BlockApi {
  private api: ApisauceInstance;

  constructor(apisauceInstance: ApisauceInstance) {
    this.api = apisauceInstance;
  }

  async get(hash: string) {
    return withErrorHandler(() => this.api.get<BlockInfo>(`/block/${hash}`));
  }

  async getHeader(hash: string) {
    return withErrorHandler(() => this.api.get<string>(`/block/${hash}/header`));
  }

  async getStatus(hash: string) {
    return withErrorHandler(() => this.api.get<BlockStatus>(`/block/${hash}/status`));
  }

  async getTransactions(hash: string, startIndex = 0) {
    return withErrorHandler(() => this.api.get<Transaction[]>(`/block/${hash}/txs/${startIndex}`));
  }

  async getTransactionsIds(hash: string) {
    return withErrorHandler(() => this.api.get<string[]>(`/block/${hash}/txids`));
  }

  async getTransactionIdAtIndex(hash: string, txIndex: number) {
    return withErrorHandler(() => this.api.get<string>(`/block/${hash}/txid/${txIndex}`));
  }

  async getRaw(hash: string) {
    return withErrorHandler(() => this.api.get<BinaryData>(`/block/${hash}/raw`));
  }

  async getHash(height: number) {
    return withErrorHandler(() => this.api.get<string>(`/block-height/${height}`));
  }

  async list(startingHeight?: number) {
    if (startingHeight) {
      return withErrorHandler(() => this.api.get<BlockInfo[]>(`/blocks/${startingHeight}`));
    }
    return withErrorHandler(() => this.api.get<BlockInfo[]>(`/blocks`));
  }

  getLatestHash() {
    return withErrorHandler(() => this.api.get<BlockInfo[]>(`/blocks/tip/hash`));
  }

  getLatestHeight() {
    return withErrorHandler(() => this.api.get<BlockInfo[]>(`/blocks/tip/height`));
  }
}
