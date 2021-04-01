import { connect, authenticate } from 'league-connect'
import LCUConnector from 'lcu-connector';
const connector = new LCUConnector();



async function websocket(result: any) {
    const credentials = await authenticate()
    const ws = await connect(credentials)
    
    ws.on('message', message => {
        if (message != "") result(JSON.parse(message.toString("utf-8")))
    })
}

export default websocket