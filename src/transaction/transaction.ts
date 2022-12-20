import apisauce, { ApisauceInstance } from "apisauce";
import { Config } from "../types";
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

  constructor(config: Config) {
    this.api = apisauce.create({
      baseURL: `${config.ELECTRUM_SERVER_URL}/tx`,
    });
  }

  async get(txId: string) {
    return withErrorHandler(() => this.api.get<Transaction>(`/${txId}`));
  }

  async status(txId: string) {
    return withErrorHandler(() => this.api.get<TransactionStatus>(`/${txId}/status`));
  }

  async hex(txId: string) {
    return withErrorHandler(() => this.api.get<string>(`/${txId}/hex`));
  }

  async raw(txId: string) {
    return withErrorHandler(() => this.api.get<BinaryData>(`/${txId}/raw`));
  }

  async merkleBlockProof(txId: string) {
    return withErrorHandler(() => this.api.get<string>(`/${txId}/merkleblock-proof`));
  }

  async merkleProof(txId: string) {
    return withErrorHandler(() => this.api.get<TransactionMerkleProof>(`/${txId}/merkle-proof`));
  }

  async outputSpend(txId: string, vout: number) {
    return withErrorHandler(() =>
      this.api.get<TransactionOutputSpend>(`/${txId}/outspend/${vout}`)
    );
  }

  async outputsSpend(txId: string) {
    return withErrorHandler(() => this.api.get<TransactionOutputSpend[]>(`/${txId}/outspends`));
  }

  async create(hex: string) {
    return withErrorHandler(() => this.api.post<TransactionCreate>("", hex));
  }
}
