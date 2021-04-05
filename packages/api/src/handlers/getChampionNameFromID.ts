import championsJSON from '../champions.json'


function getChampionNameFromID(ID:string) {
    const result = Object.values(championsJSON.data).filter(championjsonobject => {
        return championjsonobject.key == ID
    })
    
    return result[0]
}

export default getChampionNameFromID