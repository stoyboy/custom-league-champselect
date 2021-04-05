import getPhase from './handlers/getPhase'
import websocket from './handlers/websocket'
import getCurrentPlayerActions from './handlers/getCurrentPlayerActions'
import getLatestLeagueVersion from './handlers/getLatestLeagueVersion'
import getLatestLeagueDataJSON from './handlers/getLatestLeagueDataJSON'

/*getPhase((result:any) => {

    console.log(result)
})*/





function getActions(callback?: any) {
    websocket(async (result: any) => {
        callback(await getCurrentPlayerActions(result))
    })
}

getActions((callback: any) => {
    if (callback != undefined) console.log("index log", callback)
})

