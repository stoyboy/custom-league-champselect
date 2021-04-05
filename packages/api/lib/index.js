"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const websocket_1 = __importDefault(require("./handlers/websocket"));
const getCurrentPlayerActions_1 = __importDefault(require("./handlers/getCurrentPlayerActions"));
/*getPhase((result:any) => {

    console.log(result)
})*/
function getActions(callback) {
    websocket_1.default(async (result) => {
        callback(await getCurrentPlayerActions_1.default(result));
    });
}
getActions((callback) => {
    if (callback != undefined)
        console.log("index log", callback);
});
//# sourceMappingURL=index.js.map