function conversion(deg) {
    if (deg>11.25 && deg<=33.75){
        return "↗ NNE";
      }else if (deg>33.75 && deg<=56.25){
        return "↗ ENE";
      }else if (deg>56.25 && deg<=78.75){
        return "→ E";
      }else if (deg>78.75 && deg<=101.25){
        return "↘ ESE";
      }else if (deg>101.25 && deg<=123.75){
        return "↘ ESE";
      }else if (deg>123.75 && deg<=146.25){
        return "↘ SE";
      }else if (deg>146.25 && deg<=168.75){
        return "↘ SSE";
      }else if (deg>168.75 && deg<=191.25){
        return "↓ S";
      }else if (deg>191.25 && deg<=213.75){
        return "↙ SSO";
      }else if (deg>213.75 && deg<=236.25){
        return "↙ SO";
      }else if (deg>236.25 && deg<=258.75){
        return "↙ OSO";
      }else if (deg>258.75 && deg<=281.25){
        return "← O";
      }else if (deg>281.25 && deg<=303.75){
        return "↖ ONO";
      }else if (deg>303.75 && deg<=326.25){
        return "↖ NO";
      }else if (deg>326.25 && deg<=348.75){
        return "↖ NNO";
      }else{
        return "↑ N"; 
    }
}

const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-sunny",
    "Snow": "wi wi-day-snow",
    "Mist": "wi wi-day-fog",
    "Drizzle": "wi wi-day-sleet",
    "Fog": "wi wi-day-fog",
}

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

async function main(withIp = true){
    let ville;

    if(withIp){
        const ip = await fetch('https://api.ipify.org?format=json')
            .then(resultat => resultat.json())
            .then(json => json.ip)

        ville = await  fetch('https://freegeoip.app/json/' + ip)
            .then(resultat => resultat.json())
            .then(json => json.city)
    } else {
        ville = document.querySelector('#ville').textContent;
    }

    const meteo = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=f7968dde9d82ef83e8dd767462cbed50&lang=fr&units=metric`)
        .then(resultat => resultat.json())
        .then(json => json);
    
console.log(meteo)

    displayWeatherInfos(meteo)
}

function displayWeatherInfos(data){
    const name = data.name;
    const temperature = data.main.temp;
    const max = data.main.temp_max;
    const min = data.main.temp_min;
    const feels = data.main.feels_like;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const conditions = data.weather[0].main;
    const description = data.weather[0].description;
    const pays = data.sys.country;
    const visibility = data.visibility;
    const wind = data.wind.speed;
    const deg = data.wind.deg;

    document.querySelector('#ville').textContent = name;
    document.querySelector('#pays').textContent = pays;
    document.querySelector('#temperature').textContent = Math.round(temperature);
    document.querySelector('#conditions').textContent = capitalize(description);
    document.querySelector('#max').textContent = Math.round(max);
    document.querySelector('#min').textContent = Math.round(min);
    document.querySelector('#ressenti').textContent = Math.round(feels);
    document.querySelector('#humidite').textContent = humidity;
    document.querySelector('#pression').textContent = pressure;
    document.querySelector('#visibilite').textContent = visibility/1000;
    document.querySelector('#vent').textContent = Math.round(wind*3.6);
    document.querySelector('#direction').textContent = conversion(deg);

    document.querySelector('i.wi').className = weatherIcons[conditions];

    document.body.className = conditions.toLowerCase();
}

const ville = document.querySelector('#ville');
// Ajout span modifiable
ville.addEventListener('click', () => {
    ville.contentEditable = true;
});

ville.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        e.preventDefault();
        ville.contentEditable = false;
        main(false);
    }
})

main();