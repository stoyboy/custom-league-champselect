import getChampionNameFromID from "./getChampionNameFromID"


async function getCurrentPlayerActions(websocket: any) {
    const jsonData = websocket[2]

    if (jsonData.data.activeActionType === "ban") {
        if (jsonData.data.banIntentSquarePortratPath != "") {
            const championID = String(jsonData.data.banIntentSquarePortratPath.split("/")[jsonData.data.banIntentSquarePortratPath.split("/").length - 1].split(".")[0])
            const championName = getChampionNameFromID(championID)

            //console.log(championID, championName.id, jsonData.data)

            return {
                playerCell: jsonData.data.cellId,
                action: jsonData.data.activeActionType,
                championName: championName.id,
            }
        }
    }

    return null



}

export default getCurrentPlayerActions