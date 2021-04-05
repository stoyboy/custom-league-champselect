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
        if (result[2].uri.startsWith("/lol-champ-select/v1/summoners/")) {
            callback(await getCurrentPlayerActions_1.default(result));
        }
    });
}
getActions((callback) => {
    console.log(callback);
});
//# sourceMappingURL=index.js.map