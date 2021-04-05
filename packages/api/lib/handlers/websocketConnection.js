"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leagueSocket = void 0;
const league_connect_1 = require("league-connect");
class LeagueSocket {
    constructor() {
        this.registerWebsocket();
    }
    async registerWebsocket() {
        var _a;
        const credentials = await league_connect_1.authenticate();
        this.ws = await league_connect_1.connect(credentials);
        (_a = this.ws) === null || _a === void 0 ? void 0 : _a.on("message", message => {
            //console.log("TEST", message)
        });
    }
    onMessage() {
        var _a;
        (_a = this.ws) === null || _a === void 0 ? void 0 : _a.on("message", data => {
            console.log(data);
        });
    }
}
exports.leagueSocket = new LeagueSocket();
