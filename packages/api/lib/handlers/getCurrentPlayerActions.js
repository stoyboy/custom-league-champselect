"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getChampionNameFromID_1 = __importDefault(require("./getChampionNameFromID"));
async function getCurrentPlayerActions(websocket) {
    const jsonData = websocket[2];
    if (jsonData.data.activeActionType === "ban") {
        if (jsonData.data.banIntentSquarePortratPath != "") {
            const championID = String(jsonData.data.banIntentSquarePortratPath.split("/")[jsonData.data.banIntentSquarePortratPath.split("/").length - 1].split(".")[0]);
            const championName = getChampionNameFromID_1.default(championID);
            //console.log(championID, championName.id, jsonData.data)
            return {
                playerCell: jsonData.data.cellId,
                action: jsonData.data.activeActionType,
                championName: championName.id,
            };
        }
    }
    return null;
}
exports.default = getCurrentPlayerActions;
//# sourceMappingURL=getCurrentPlayerActions.js.map