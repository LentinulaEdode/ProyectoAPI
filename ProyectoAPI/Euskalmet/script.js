const api_key = incognito;

const fetchData = async function(URL, callback) {
    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${api_key}`,
                'Host': "api.euskadi.eus",
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

const url = {
    weatherForecast(regionId, inDays, zoneId, locId) {
        const today = new Date();
        const futureDay = new Date(today);
        futureDay.setDate(futureDay.getDate() + inDays);
        const yyyy = today.getFullYear();
        const mm = (today.getMonth() + 1).toString().padStart(2, '0');
        const dd = today.getDate().toString().padStart(2, '0');
        const yyyymmdd = `${yyyy}${mm}${dd}`;

        return `https://api.euskadi.eus/euskalmet/weather/regions/${regionId}/zones/${zoneId}/locations/${locId}/forecast/at/${yyyy}/${mm}/${dd}/for/${yyyymmdd}`;
    }
}

const debugCallback = function(result) {
    console.log(result);
}

fetchData(url.weatherForecast('basque_country', 2, 'great_bilbao', 'bilbao'), debugCallback);