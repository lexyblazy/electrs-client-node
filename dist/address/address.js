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
exports.AddressApi = void 0;
const utils_1 = require("../utils");
class AddressApi {
    constructor(apisauceInstance) {
        this.api = apisauceInstance;
    }
    getInfo(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/address/${address}`));
        });
    }
    getTransactions(address, lastSeenTxId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => {
                if (lastSeenTxId) {
                    return this.api.get(`/address/${address}/txs/chain/${lastSeenTxId}`);
                }
                return this.api.get(`/address/${address}/txs`);
            });
        });
    }
    getMempoolTransactions(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/address/${address}/txs/mempool`));
        });
    }
}
exports.AddressApi = AddressApi;
