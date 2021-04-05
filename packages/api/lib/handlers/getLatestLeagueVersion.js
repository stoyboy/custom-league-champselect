"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function getLatestLeagueVersion() {
    try {
        const response = await axios_1.default({
            method: "GET",
            url: "https://ddragon.leagueoflegends.com/api/versions.json"
        });
        console.log(response.data[0]);
        return response.data[0];
    }
    catch (err) {
        return err;
    }
}
exports.default = getLatestLeagueVersion;
//# sourceMappingURL=getLatestLeagueVersion.js.map