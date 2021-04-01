import { connect, authenticate } from 'league-connect'
import LCUConnector from 'lcu-connector';
import axios from 'axios'
import https from 'https'
import fs from 'fs'
import path from 'path'
const connector = new LCUConnector();

async function getPhase(result: any) {
    connector.on('connect', async (data) => {
        const riotCertificate = fs.readFileSync(path.resolve(__dirname, "../../riotgames.pem"))
        const agent = new https.Agent({
            ca: riotCertificate
        })
        try {
            const response = await axios({
                method: 'get',
                url: `https://127.0.0.1:${data.port}/lol-champ-select/v1/session/timer`,
                headers: {
                    'Authorization': `Basic ${Buffer.from(data.username + ":" + data.password, 'utf-8').toString('base64')}`
                },
                httpsAgent: agent
            })
            result(response)
        }
        catch (err) {
            result(err)
        }
        
    });

    // Start listening for the LCU client
    connector.start();
}

export default getPhase

