import axios from 'axios'

async function getLatestLeagueDataJSON(version:string) {
    try {
        const response = await axios({
            method: "GET",
            url: `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
        })
        console.log(response.data)
        return response.data
    }
    catch (err) {
        return err
    }
    
}

export default getLatestLeagueDataJSON