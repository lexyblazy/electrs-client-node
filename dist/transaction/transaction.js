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
exports.TransactionApi = void 0;
const utils_1 = require("../utils");
class TransactionApi {
    constructor(apisauceInstance) {
        this.api = apisauceInstance;
    }
    get(txId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/tx/${txId}`));
        });
    }
    status(txId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/tx/${txId}/status`));
        });
    }
    hex(txId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/tx/${txId}/hex`));
        });
    }
    raw(txId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/tx/${txId}/raw`));
        });
    }
    merkleBlockProof(txId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/tx/${txId}/merkleblock-proof`));
        });
    }
    merkleProof(txId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/tx/${txId}/merkle-proof`));
        });
    }
    outputSpend(txId, vout) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/tx/${txId}/outspend/${vout}`));
        });
    }
    outputsSpend(txId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.get(`/tx/${txId}/outspends`));
        });
    }
    create(hex) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.withErrorHandler)(() => this.api.post("/tx", hex));
        });
    }
}
exports.TransactionApi = TransactionApi;
