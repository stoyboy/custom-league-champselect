"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const websocket_1 = __importDefault(require("./handlers/websocket"));
/*getPhase((result:any) => {

    console.log(result)
})*/
websocket_1.default((result) => {
    console.log(result);
});
