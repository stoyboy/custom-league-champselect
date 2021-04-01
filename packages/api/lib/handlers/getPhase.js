"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lcu_connector_1 = __importDefault(require("lcu-connector"));
const axios_1 = __importDefault(require("axios"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const connector = new lcu_connector_1.default();
async function getPhase(result) {
    connector.on('connect', async (data) => {
        const riotCertificate = fs_1.default.readFileSync(path_1.default.resolve(__dirname, "../../riotgames.pem"));
        const agent = new https_1.default.Agent({
            ca: riotCertificate
        });
        try {
            const response = await axios_1.default({
                method: 'get',
                url: `https://127.0.0.1:${data.port}/lol-champ-select/v1/session/timer`,
                headers: {
                    'Authorization': `Basic ${Buffer.from(data.username + ":" + data.password, 'utf-8').toString('base64')}`
                },
                httpsAgent: agent
            });
            result(response);
        }
        catch (err) {
            result(err);
        }
    });
    // Start listening for the LCU client
    connector.start();
}
exports.default = getPhase;
