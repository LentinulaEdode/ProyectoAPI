 // const api_key, se ha eliminado de este archivo para incluirlo en el .gitignore

const fetchData =  function(URL, callback) {
     fetch(URL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${api_key}`,
            'Host': "api.euskadi.eus",
            'Accept': '*/*',
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive"
        }
    })
    .then(res => res.json())
    .then(data => callback(data))
    .catch(error => console.log("Error:" + error));
}


const formatDate = function(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}${month}${day}`;
}

const url = {
  
    weatherForecast(regionId, inDays, zoneId, locId) {
        const today = new Date();
        let futureDay = new Date();
        futureDay.setDate(today.getDate() + inDays);
        const yyyy = today.getFullYear().toString();
        const mm = (today.getMonth() +1).toString().padStart(2, "0");
        const dd = today.getDate().toString().padStart(2, "0");

        const yyyymmdd = formatDate(futureDay);
        return `https://api.euskadi.eus/euskalmet/weather/regions/${regionId}/zones/${zoneId}/locations/${locId}/forecast/at/${yyyy}/${mm}/${dd}/for/${yyyymmdd}`;
    },

    // getZones (regionId, zoneId) {
    //     return `https://api.euskadi.eus/euskalmet/geo/regions/${regionId}/zones?token=${api_key}`
    // },
}

const debugCallback = function(result) {
    console.log(result);
}
fetchData(url.weatherForecast('basque_country', 2, 'great_bilbao',  'bilbao'), debugCallback);