import { ApisauceInstance } from "apisauce";
import { withErrorHandler } from "../utils";

import {
  Transaction,
  TransactionCreate,
  TransactionMerkleProof,
  TransactionOutputSpend,
  TransactionStatus,
} from "./types";

export class TransactionApi {
  private api: ApisauceInstance;

  constructor(apisauceInstance: ApisauceInstance) {
    this.api = apisauceInstance;
  }

  async get(txId: string) {
    return withErrorHandler(() => this.api.get<Transaction>(`/tx/${txId}`));
  }

  async status(txId: string) {
    return withErrorHandler(() => this.api.get<TransactionStatus>(`/tx/${txId}/status`));
  }

  async hex(txId: string) {
    return withErrorHandler(() => this.api.get<string>(`/tx/${txId}/hex`));
  }

  async raw(txId: string) {
    return withErrorHandler(() => this.api.get<BinaryData>(`/tx/${txId}/raw`));
  }

  async merkleBlockProof(txId: string) {
    return withErrorHandler(() => this.api.get<string>(`/tx/${txId}/merkleblock-proof`));
  }

  async merkleProof(txId: string) {
    return withErrorHandler(() => this.api.get<TransactionMerkleProof>(`/tx/${txId}/merkle-proof`));
  }

  async outputSpend(txId: string, vout: number) {
    return withErrorHandler(() =>
      this.api.get<TransactionOutputSpend>(`/tx/${txId}/outspend/${vout}`)
    );
  }

  async outputsSpend(txId: string) {
    return withErrorHandler(() => this.api.get<TransactionOutputSpend[]>(`/tx/${txId}/outspends`));
  }

  async create(hex: string) {
    return withErrorHandler(() => this.api.post<TransactionCreate>("/tx", hex));
  }
}
