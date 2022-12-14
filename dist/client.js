"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const apisauce_1 = __importDefault(require("apisauce"));
const address_1 = require("./address");
const block_1 = require("./block");
const fee_1 = require("./fee");
const mempool_1 = require("./mempool");
const transaction_1 = require("./transaction");
class Client {
    constructor(config) {
        this.api = apisauce_1.default.create({
            baseURL: `${config.ELECTRUM_SERVER_URL}`,
        });
        this.transaction = new transaction_1.TransactionApi(this.api);
        this.address = new address_1.AddressApi(this.api);
        this.block = new block_1.BlockApi(this.api);
        this.mempool = new mempool_1.MempoolApi(this.api);
        this.fee = new fee_1.FeeApi(this.api);
    }
}
exports.Client = Client;
