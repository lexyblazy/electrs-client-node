import apisauce, { ApiResponse, ApisauceInstance } from "apisauce";
import { Config } from "../types";
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

  async withErrorHandler<T>(fn: () => Promise<ApiResponse<T>>) {
    const response = await fn();

    if (!response.ok) {
      const message = `problem = ${response.problem}, status=${response.status}`;
      
      console.log(response.config)

      throw new Error(message);
    }

    return response.data;
  }

  async get(txId: string) {
    return this.withErrorHandler(() => this.api.get<Transaction>(`/${txId}`));
  }

  async status(txId: string) {
    return this.withErrorHandler(() => this.api.get<TransactionStatus>(`/${txId}/status`));
  }

  async hex(txId: string) {
    return this.withErrorHandler(() => this.api.get<string>(`/${txId}/hex`));
  }

  async raw(txId: string) {
    return this.withErrorHandler(() => this.api.get<BinaryData>(`/${txId}/raw`));
  }

  async merkleBlockProof(txId: string) {
    return this.withErrorHandler(() => this.api.get<string>(`/${txId}/merkleblock-proof`));
  }

  async merkleProof(txId: string) {
    return this.withErrorHandler(() =>
      this.api.get<TransactionMerkleProof>(`/${txId}/merkle-proof`)
    );
  }

  async outputSpend(txId: string, vout: number) {
    return this.withErrorHandler(() =>
      this.api.get<TransactionOutputSpend>(`/${txId}/outspend/${vout}`)
    );
  }

  async outputsSpend(txId: string) {
    return this.withErrorHandler(() =>
      this.api.get<TransactionOutputSpend[]>(`/${txId}/outspends`)
    );
  }

  async create(hex: string) {
    return this.withErrorHandler(() => this.api.post<TransactionCreate>("", hex));
  }
}
