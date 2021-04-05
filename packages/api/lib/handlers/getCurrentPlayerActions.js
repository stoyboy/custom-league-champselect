"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getChampionNameFromID_1 = __importDefault(require("./getChampionNameFromID"));
async function getCurrentPlayerActions(websocket) {
    const jsonData = websocket[2];
    if (jsonData.uri === "/lol-champ-select/v1/session") {
        //console.log(jsonData.data.actions)
        if (jsonData.data.actions.length !== 0) {
            //if (jsonData.data.actions[0].length > 1) this lobby contains bots #TODO      
            const championID = jsonData.data.actions[jsonData.data.actions.length - 1][0].championId;
            const championName = getChampionNameFromID_1.default(championID);
            if (championID == 0) {
                return {
                    playerCell: jsonData.data.actions[jsonData.data.actions.length - 1][0].actorCellId,
                    action: jsonData.data.actions[jsonData.data.actions.length - 1][0].type,
                    championName: null,
                    completed: jsonData.data.actions[jsonData.data.actions.length - 1][0].completed
                };
            }
            else {
                return {
                    playerCell: jsonData.data.actions[jsonData.data.actions.length - 1][0].actorCellId,
                    action: jsonData.data.actions[jsonData.data.actions.length - 1][0].type,
                    championName: championName.id,
                    completed: jsonData.data.actions[jsonData.data.actions.length - 1][0].completed
                };
            }
            //console.log(championID, championName.id, jsonData.data)
            // } else {
            //     return {
            //         playerCell: jsonData.data.cellId,
            //         action: jsonData.data.activeActionType,
            //         championName: "",
            //     }
            // }
        }
    }
    else if (jsonData.uri.startsWith("/lol-champ-select/v1/summoners/")) {
        if (jsonData.data.activeActionType === "pick") {
            const championName = jsonData.data.championName;
            //console.log(championID, championName.id, jsonData.data)
            return {
                playerCell: jsonData.data.cellId,
                action: jsonData.data.activeActionType,
                championName: championName,
            };
        }
    }
    return;
}
exports.default = getCurrentPlayerActions;
//# sourceMappingURL=getCurrentPlayerActions.js.map