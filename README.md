# electrs-client-node

A NodeJS client for communicating with [Blockstream's electrs](https://github.com/Blockstream/electrs) HTTP api

```ts

import { Client } from "electrs-client-node";

const client = new Client({
  ELECTRUM_SERVER_URL: "http://localhost:30000",
});

```

## Transactions 

```ts

// GET a transaction
const tx = await client.transaction.get(txId)

// GET transaction status
const txStatus = await client.transaction.status(txId)

// GET transaction  hex 
const hex = await client.transaction.hex(txId)

// GET transaction raw
const raw = await client.transaction.raw(txId)


// GET merkle inclusion proof(using bitcoind's merkleblock format)
const merkleBlockProof = await client.transaction.merkleBlockProof(txId)

// GET merkle inclusion proof( using Electrum's blockchain.transaction.get_merkle format)
const merkleProof = await client.transaction.merkleProof(txId)

// GET spending status of a transaction output
const spendingStatus = await client.transaction.outputSpend(txId, vout)

// GET spending status of all transaction output
const spendingStatus = await client.transaction.outputsSpend(txId)

// CREATE a transaction
const tx = await client.transaction.create(hex)

```

## Addresses

```ts

// GET address information
const addressInfo = await client.address.getInfo(address);

// Get transaction history for the specified address/scripthash, sorted with newest first. Returns 25 transactions per page. 
const addressTransactions = await client.address.getTransactions(address);
  
// More can be requested by specifying the last txid seen by the previous query.
const moreTransactions = await client.address.getTransactions(address, lastSeenTxId)

// Get unconfirmed transaction history for the specified address/scripthash.
// Returns up to 50 transactions (no paging)
const mempoolTxs = await client.address.getMempoolTransactions(address);

// Get the list of unspent transaction outputs associated with the address
const utxos = await client.address.getUtxo(address);

// Search for addresses beginning with :prefix.
// Returns a JSON array with up to 10 results.
const addresses = await client.address.getByPrefix(address);

  
```

Note: Build artifacts are committed to the repository (see `dist` folder) because the project is in active development.

I'll undo this as soon the project is stable and ready to be published to npm. 