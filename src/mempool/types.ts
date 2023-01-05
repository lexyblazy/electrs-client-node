export interface MempoolStats {
  count: number;
  vsize: number;
  total_fee: number;
  fee_histogram: number[][];
}

export interface MempoolTransaction {
  txid: string;
  fee: number;
  vsize: number;
  value: number;
}
