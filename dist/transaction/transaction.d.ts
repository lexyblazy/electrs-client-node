import { ApisauceInstance } from "apisauce";
import { Transaction, TransactionCreate, TransactionMerkleProof, TransactionOutputSpend, TransactionStatus } from "./types";
export declare class TransactionApi {
    private api;
    constructor(apisauceInstance: ApisauceInstance);
    get(txId: string): Promise<Transaction | undefined>;
    status(txId: string): Promise<TransactionStatus | undefined>;
    hex(txId: string): Promise<string | undefined>;
    raw(txId: string): Promise<BinaryData | undefined>;
    merkleBlockProof(txId: string): Promise<string | undefined>;
    merkleProof(txId: string): Promise<TransactionMerkleProof | undefined>;
    outputSpend(txId: string, vout: number): Promise<TransactionOutputSpend | undefined>;
    outputsSpend(txId: string): Promise<TransactionOutputSpend[] | undefined>;
    create(hex: string): Promise<TransactionCreate | undefined>;
}
