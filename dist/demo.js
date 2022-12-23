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
const client = new client_1.Client({
    ELECTRUM_SERVER_URL: "http://localhost:30000",
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const address = "bcrt1qk8fpg7wr6z23jk68m0fs09xjqnzk7lzpdcuu3k";
        const mempoolTxs = yield client.address.getInfo(address);
        console.log(mempoolTxs);
    });
}
main();
// const hex =
//   "020000000001016c42425479862f546b45dc7140a71f17dda85a511093a7ede99ae45471b88ed10100000000feffffff0280020a0000000000160014fc128f18021248f6a178097732642edc5dbabde199fc6f21000000001600140fbb8ce33e7a1683714a8f34e880cf2b7ab97a3d0247304402206629e9cc7ad6ace610b6fc91d0d5e9f30ef229348a3a6a8b9f3255ee7b5f6c3302200dff54aece3d1da4d7b683a817e96565cf144797f4cffb607ae9d820e6405a3501210395c8037cfafb662f813f213f2c8f1df83cbfd90ebc6a52ca96b2f3f17fdc054aa5020000";
