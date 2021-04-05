import axios from 'axios'

async function getLatestLeagueVersion() {
    try {
        const response = await axios({
            method: "GET",
            url: "https://ddragon.leagueoflegends.com/api/versions.json"
        })
        console.log(response.data[0])
        return response.data[0]
    }
    catch (err) {
        return err
    }
    
}

export default getLatestLeagueVersion