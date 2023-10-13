
async function getMatchData() {
    try {
        const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=0e52c137-4fce-4fa2-8940-70d519136243&offset=0');
        const data = await response.json();
        const matchesList = data.data;
        if(!matchesList)return [];
        const mappedData = matchesList.filter(match => match.series_id=="bd830e89-3420-4df5-854d-82cfab3e1e04").map(match => `${match.name}, ${match.status}`);
        console.log({mappedData});
        document.getElementById("matches").innerHTML = mappedData.map(match => `<li>${match}</li>`).join('');
        return mappedData;
      
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

getMatchData();

  