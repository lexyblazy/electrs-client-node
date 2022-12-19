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

````