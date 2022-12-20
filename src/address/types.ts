export interface AddressInfo {
  address: string;
  chain_stats: AddressChainStats;
  mempool_stats: AddressMempoolStats;
}

export interface AddressMempoolStats {
  funded_txo_count: number;
  funded_txo_sum: number;
  spent_txo_count: number;
  spent_txo_sum: number;
  tx_count: number;
}

export interface AddressChainStats {
  funded_txo_count: number;
  funded_txo_sum: number;
  spent_txo_count: number;
  spent_txo_sum: number;
  tx_count: number;
}
