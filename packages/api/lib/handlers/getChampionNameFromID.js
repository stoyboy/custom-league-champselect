"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const champions_json_1 = __importDefault(require("../champions.json"));
function getChampionNameFromID(ID) {
    const result = Object.values(champions_json_1.default.data).filter(championjsonobject => {
        return championjsonobject.key == ID;
    });
    return result[0];
}
exports.default = getChampionNameFromID;
//# sourceMappingURL=getChampionNameFromID.js.map