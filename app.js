var isoCountries = {
  'AF' : 'Afghanistan',
  'AX' : 'Åland',
  'AL' : 'Albanie',
  'DZ' : 'Algérie',
  'AS' : 'Samoa américaines',
  'AD' : 'Andorre',
  'AO' : 'Angola',
  'AI' : 'Anguilla',
  'AQ' : 'Antarctique',
  'AG' : 'Antigua-et-Barbuda',
  'AR' : 'Argentine',
  'AM' : 'Armenie',
  'AW' : 'Aruba',
  'AU' : 'Australie',
  'AT' : 'Autriche',
  'AZ' : 'Azerbaïdjan',
  'BS' : 'Bahamas',
  'BH' : 'Bahreïn',
  'BD' : 'Bangladesh',
  'BB' : 'Barbade',
  'BY' : 'Biélorussie',
  'BE' : 'Belgique',
  'BZ' : 'Belize',
  'BJ' : 'Benin',
  'BM' : 'Bermudes',
  'BT' : 'Bhoutan',
  'BO' : 'Bolivie',
  'BA' : 'Bosnie-Hérzegovine',
  'BW' : 'Botswana',
  'BV' : 'Île Bouvet',
  'BR' : 'Brésil',
  'IO' : 'Territoire brittanique de l\'océan Indien',
  'BN' : 'Brunéi Darussalam',
  'BG' : 'Bulgarie',
  'BF' : 'Burkina Faso',
  'BI' : 'Burundi',
  'KH' : 'Cambodge',
  'CM' : 'Cameroun',
  'CA' : 'Canada',
  'CV' : 'Cap Vert',
  'KY' : 'Îles Caïmans',
  'CF' : 'République centrafricaine',
  'TD' : 'Tchad',
  'CL' : 'Chili',
  'CN' : 'Chine',
  'CX' : 'Île Christmas',
  'CC' : 'Îles Cocos (Keeling)',
  'CO' : 'Colombie',
  'KM' : 'Comores',
  'CG' : 'Congo',
  'CD' : 'Congo, République Démocratique',
  'CK' : 'Îles Cook',
  'CR' : 'Costa Rica',
  'CI' : 'Cote D\'Ivoire',
  'HR' : 'Croatie',
  'CU' : 'Cuba',
  'CY' : 'Chypre',
  'CZ' : 'Tchéquie',
  'DK' : 'Danemark',
  'DJ' : 'Djibouti',
  'DM' : 'Dominique',
  'DO' : 'République dominicaine',
  'EC' : 'Équateur',
  'EG' : 'Égypte',
  'SV' : 'El Salvador',
  'GQ' : 'Guinée équatoriale',
  'ER' : 'Érythrée',
  'EE' : 'Estonie',
  'ET' : 'Ethiopie',
  'FK' : 'Îles Falkland (Malvinas)',
  'FO' : 'Îles Féroé',
  'FJ' : 'Fiji',
  'FI' : 'Finlande',
  'FR' : 'France',
  'GF' : 'Guyane française',
  'PF' : 'Polynésie française',
  'TF' : 'Terres australes et antarctiques françaises',
  'GA' : 'Gabon',
  'GM' : 'Gambie',
  'GE' : 'Géorgie',
  'DE' : 'Allemagne',
  'GH' : 'Ghana',
  'GI' : 'Gibraltar',
  'GR' : 'Grèce',
  'GL' : 'Groenland',
  'GD' : 'Grenade',
  'GP' : 'Guadeloupe',
  'GU' : 'Guam',
  'GT' : 'Guatemala',
  'GG' : 'Guernsey',
  'GN' : 'Guinée',
  'GW' : 'Guinée-Bissau',
  'GY' : 'Guyana',
  'HT' : 'Haïti',
  'HM' : 'Îles Heard et McDonald',
  'VA' : 'Vatican',
  'HN' : 'Honduras',
  'HK' : 'Hong Kong',
  'HU' : 'Hongrie',
  'IS' : 'Islande',
  'IN' : 'Inde',
  'ID' : 'Indonésie',
  'IR' : 'Iran',
  'IQ' : 'Irak',
  'IE' : 'Irlande',
  'IM' : 'Île de Man',
  'IL' : 'Israël',
  'IT' : 'Italie',
  'JM' : 'Jamaïque',
  'JP' : 'Japon',
  'JE' : 'Jersey',
  'JO' : 'Jordanie',
  'KZ' : 'Kazakhstan',
  'KE' : 'Kenya',
  'KI' : 'Kiribati',
  'KR' : 'Corée du Sud',
  'KW' : 'Koweït',
  'KG' : 'Kyrgyzstan',
  'LA' : 'Laos',
  'LV' : 'Lettonie',
  'LB' : 'Liban',
  'LS' : 'Lesotho',
  'LR' : 'Liberia',
  'LY' : 'Libye',
  'LI' : 'Liechtenstein',
  'LT' : 'Lituanie',
  'LU' : 'Luxembourg',
  'MO' : 'Macao',
  'MK' : 'Macédoine du Nord',
  'MG' : 'Madagascar',
  'MW' : 'Malawi',
  'MY' : 'Malaisie',
  'MV' : 'Maldives',
  'ML' : 'Mali',
  'MT' : 'Malte',
  'MH' : 'Îles Marshall',
  'MQ' : 'Martinique',
  'MR' : 'Mauritanie',
  'MU' : 'Maurice',
  'YT' : 'Mayotte',
  'MX' : 'Mexique',
  'FM' : 'Micronésie',
  'MD' : 'Moldavie',
  'MC' : 'Monaco',
  'MN' : 'Mongolie',
  'ME' : 'Monténégro',
  'MS' : 'Montserrat',
  'MA' : 'Maroc',
  'MZ' : 'Mozambique',
  'MM' : 'Myanmar (Birmanie)',
  'NA' : 'Namibie',
  'NR' : 'Nauru',
  'NP' : 'Népal',
  'NL' : 'Pays-Bas',
  'AN' : 'Antilles néerlandaises',
  'NC' : 'Nouvelle Calédonie',
  'NZ' : 'Nouvelle Zélande',
  'NI' : 'Nicaragua',
  'NE' : 'Niger',
  'NG' : 'Nigeria',
  'NU' : 'Niué',
  'NF' : 'Île Norfolk',
  'MP' : 'Îles Mariannes du Nord',
  'NO' : 'Norvège',
  'OM' : 'Oman',
  'PK' : 'Pakistan',
  'PW' : 'Palau',
  'PS' : 'Palestine',
  'PA' : 'Panama',
  'PG' : 'Papouasie-Nouvelle-Guinée',
  'PY' : 'Paraguay',
  'PE' : 'Pérou',
  'PH' : 'Philippines',
  'PN' : 'Îles Pitcairn',
  'PL' : 'Pologne',
  'PT' : 'Portugal',
  'PR' : 'Porto Rico',
  'QA' : 'Qatar',
  'RE' : 'Réunion',
  'RO' : 'Roumanie',
  'RU' : 'Russie',
  'RW' : 'Rwanda',
  'BL' : 'Saint-Barthélemy',
  'SH' : 'Sainte-Hélène',
  'KN' : 'Saint-Kitts-et-Nevis',
  'LC' : 'Sainte-Lucie',
  'MF' : 'Saint-Martin',
  'PM' : 'Saint-Pierre-et-Miquelon',
  'VC' : 'Saint-Vincent et les Grenadines',
  'WS' : 'Samoa',
  'SM' : 'Saint-Marin',
  'ST' : 'Sao Tomé-et-Principe',
  'SA' : 'Arabie saoudite',
  'SN' : 'Sénégal',
  'RS' : 'Serbie',
  'SC' : 'Seychelles',
  'SL' : 'Sierra Leone',
  'SG' : 'Singapour',
  'SK' : 'Slovaquie',
  'SI' : 'Slovenie',
  'SB' : 'Îles Salomon',
  'SO' : 'Somalie',
  'ZA' : 'Afrique du Sud',
  'GS' : 'Géorgie du Sud et les Îles Sandwich du Sud',
  'ES' : 'Espagne',
  'LK' : 'Sri Lanka',
  'SD' : 'Soudan',
  'SR' : 'Suriname',
  'SJ' : 'Svalbard et Jan Mayen',
  'SZ' : 'Eswatini',
  'SE' : 'Suède',
  'CH' : 'Suisse',
  'SY' : 'Syrie',
  'TW' : 'Taïwan',
  'TJ' : 'Tajikistan',
  'TZ' : 'Tanzanie',
  'TH' : 'Thaïlande',
  'TL' : 'Timor-Leste',
  'TG' : 'Togo',
  'TK' : 'Tokelau',
  'TO' : 'Tonga',
  'TT' : 'Trinité-et-Tobago',
  'TN' : 'Tunisie',
  'TR' : 'Turquie',
  'TM' : 'Turkménistan',
  'TC' : 'Îles Turks et Caïques',
  'TV' : 'Tuvalu',
  'UG' : 'Ouganda',
  'UA' : 'Ukraine',
  'AE' : 'Émirats arabes unis',
  'GB' : 'Royaume-Uni',
  'US' : 'États-Unis',
  'UM' : 'Îles mineures éloignées des États-Unis',
  'UY' : 'Uruguay',
  'UZ' : 'Ouzbékistan',
  'VU' : 'Vanuatu',
  'VE' : 'Venezuela',
  'VN' : 'Vietnam',
  'VG' : 'Îles Vierges britanniques',
  'VI' : 'Îles Vierges des États-Unis',
  'WF' : 'Wallis et Futuna',
  'EH' : 'Sahara occidental',
  'YE' : 'Yémen',
  'ZM' : 'Zambie',
  'ZW' : 'Zimbabwe'
};

// Fonction conversion code pays en nom du pays
function getCountryName (countryCode) {
  if (isoCountries.hasOwnProperty(countryCode)) {
      return isoCountries[countryCode];
  } else {
      return countryCode;
  }
}

// Conversion code pays en emoji (ex FR -> 🇫🇷) 
function country2emoji(pays) {
  var OFFSET = 127397;
  var cc = pays.toUpperCase();
  function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
          }
          return arr2;
      } else {
          return Array.from(arr);
      }
  }
  return /^[A-Z]{2}$/.test(cc) ? String.fromCodePoint.apply(String, _toConsumableArray([].concat(_toConsumableArray(cc)).map(function (c) {
      return c.charCodeAt() + OFFSET;
  }))) : null;
}

// Convert UNIX Timstamp in hours:minutes
function timeConverter(i){
  var a = new Date(i * 1000);
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = hour + 'h' + min;
  return time;
}

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

const weatherIconsNight = {
  "Rain": "wi wi-night-alt-rain",
  "Clouds": "wi wi-night-alt-cloudy",
  "Clear": "wi wi-night-clear",
  "Snow": "wi wi-night-alt-snow",
  "Mist": "wi wi-night-fog",
  "Drizzle": "wi wi-night-alt-sleet",
  "Fog": "wi wi-night-fog",
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

let hour = new Date().getHours();

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
    // const timelocale = data.dt;
    // const timezone = data.timezone;
    // const sunrise = data.sys.sunrise;
    // const sunset = data.sys.sunset;

    document.querySelector('#ville').textContent = name;
    document.querySelector('#pays').textContent = country2emoji(pays);
    document.querySelector('#code').textContent = getCountryName(pays);
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
    // document.querySelector('#heure').textContent = timeConverter(timelocale+timezone);
    // document.querySelector('#lever').textContent = timeConverter(sunrise+timezone);
    // document.querySelector('#coucher').textContent = timeConverter(sunset+timezone);
    

    // between 7 PM and 7 AM
    if(hour >= 19 || hour <= 7) {
      document.querySelector('i.wi').className = weatherIconsNight[conditions];
    } else {
      document.querySelector('i.wi').className = weatherIcons[conditions];
    }

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