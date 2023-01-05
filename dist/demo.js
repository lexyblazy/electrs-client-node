"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new client_1.Client({
        ELECTRUM_SERVER_URL: "http://localhost:30000",
    });
    const mempoolStats = yield client.mempool.getStats();
    console.log(mempoolStats);
    const mempoolTxIds = yield client.mempool.getTxIds();
    console.log(mempoolTxIds);
    const recentTxs = yield client.mempool.getRecentTxs();
    console.log(recentTxs);
});
main().then(console.log).catch(console.error);
