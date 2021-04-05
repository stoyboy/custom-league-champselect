import getPhase from './handlers/getPhase'
import websocket from './handlers/websocket'
import getCurrentPlayerActions from './handlers/getCurrentPlayerActions'
import getLatestLeagueVersion from './handlers/getLatestLeagueVersion'
import getLatestLeagueDataJSON from './handlers/getLatestLeagueDataJSON'

/*getPhase((result:any) => {

    console.log(result)
})*/





function getActions(callback?:any) {
    websocket(async (result:any) => {
        if (result[2].uri.startsWith("/lol-champ-select/v1/summoners/")) {
            callback(await getCurrentPlayerActions(result))
        }
    })
}

getActions((callback:any) => {
    console.log(callback)
})

