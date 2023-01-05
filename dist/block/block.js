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
exports.BlockApi = void 0;
const utils_1 = require("../utils");
class BlockApi {
    constructor(apisauceInstance) {
        this.api = apisauceInstance;
    }
    get(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/block/${hash}`));
        });
    }
    getHeader(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/block/${hash}/header`));
        });
    }
    getStatus(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/block/${hash}/status`));
        });
    }
    getTransactions(hash, startIndex = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/block/${hash}/txs/${startIndex}`));
        });
    }
    getTransactionsIds(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/block/${hash}/txids`));
        });
    }
    getTransactionIdAtIndex(hash, txIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/block/${hash}/txid/${txIndex}`));
        });
    }
    getRaw(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/block/${hash}/raw`));
        });
    }
    getHash(height) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/block-height/${height}`));
        });
    }
    list(startingHeight) {
        return __awaiter(this, void 0, void 0, function* () {
            if (startingHeight) {
                return (0, utils_1.withErrorHandler)(() => this.api.get(`/blocks/${startingHeight}`));
            }
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/blocks`));
        });
    }
    getLatestHash() {
        return (0, utils_1.withErrorHandler)(() => this.api.get(`/blocks/tip/hash`));
    }
    getLatestHeight() {
        return (0, utils_1.withErrorHandler)(() => this.api.get(`/blocks/tip/height`));
    }
}
exports.BlockApi = BlockApi;
