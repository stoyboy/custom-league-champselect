"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function getLatestLeagueDataJSON(version) {
    try {
        const response = await axios_1.default({
            method: "GET",
            url: `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
        });
        console.log(response.data);
        return response.data;
    }
    catch (err) {
        return err;
    }
}
exports.default = getLatestLeagueDataJSON;
//# sourceMappingURL=getLatestLeagueDataJSON.js.map