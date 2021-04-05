"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const league_connect_1 = require("league-connect");
const lcu_connector_1 = __importDefault(require("lcu-connector"));
const connector = new lcu_connector_1.default();
async function websocket(result) {
    const credentials = await league_connect_1.authenticate();
    const ws = await league_connect_1.connect(credentials);
    ws.on('message', message => {
        if (message != "")
            result(JSON.parse(message.toString("utf-8")));
    });
}
exports.default = websocket;
//# sourceMappingURL=websocket.js.map