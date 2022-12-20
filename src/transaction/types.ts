export interface Transaction {
  txid: string;
  version: number;
  locktime: number;
  vin: TransactionInput[];
  vout: TransactionOutput[];
  size: number;
  weight: number;
  fee: number;
  status: TransactionStatus;
}

export interface TransactionOutput {
  scriptpubkey: string;
  scriptpubkey_asm: string;
  scriptpubkey_type: "p2pkh" | "v0_p2wpkh";
  scriptpubkey_address: string;
  value: number;
}

export interface TransactionInput {
  txid: string;
  vout: number;
  prevout: TransactionOutput;
  scriptsig: string;
  scriptsig_asm: string;
  is_coinbase: boolean;
  sequence: number;

  witness?: string[];
}

export interface TransactionStatus {
  confirmed: boolean;
  block_height?: number;
  block_hash?: string;
  block_time?: number;
}

export interface TransactionMerkleProof {
  block_height: number;
  merkle: string;
  pos: number;
}

export interface TransactionOutputSpend {
  spent: boolean;
  txid?: string;
  vin?: number;
  status?: TransactionStatus;
}

export interface TransactionCreate {
  txid: string;
}
