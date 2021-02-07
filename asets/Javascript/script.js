let searchBar = document.querySelector(".form-control");
let searchButton = document.querySelector(".btn-dark");
let cityName = document.querySelector(".cityName");
let weather = document.querySelector(".weather");
let temperature = document.querySelector(".temperature");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".windSpeed");
let day1 = document.querySelector(".day1");
let day2 = document.querySelector(".day2");
let day3 = document.querySelector(".day3");
let day4 = document.querySelector(".day4");
let day5 = document.querySelector(".day5");
let temp1 = document.querySelector(".temp1");
let temp2 = document.querySelector(".temp2");
let temp3 = document.querySelector(".temp3");
let temp4 = document.querySelector(".temp4");
let temp5 = document.querySelector(".temp5");
let hume1 = document.querySelector(".humidity1");
let hume2 = document.querySelector(".humidity2");
let hume3 = document.querySelector(".humidity3");
let hume4 = document.querySelector(".humidity4");
let hume5 = document.querySelector(".humidity5");



searchButton.addEventListener("click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchBar.value + '&APPID=d5ad7d999005cdca4b2e01cd2efca627')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let lat=data.coord.lat;
            let lon=data.coord.lon;
            let name = data['name'];
            cityName.innerHTML = "City: " + name;
            
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&units=imperial&appid=d5ad7d999005cdca4b2e01cd2efca627')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    
                    let temp = data['current']['temp'];
                    let hum = data['current']['humidity'];
                    let wind = data['current']['wind_speed'];
                    let temper1 = data['daily'][0]['temp']['day'];
                    let temper2 = data['daily'][1]['temp']['day'];
                    let temper3 = data['daily'][2]['temp']['day'];
                    let temper4 = data['daily'][3]['temp']['day'];
                    let temper5 = data['daily'][4]['temp']['day'];
                    let hum1 = data['daily'][0]["humidity"];
                    let hum2 = data['daily'][1]["humidity"];
                    let hum3 = data['daily'][2]["humidity"];
                    let hum4 = data['daily'][3]["humidity"];
                    let hum5 = data['daily'][4]["humidity"];


                    
                    temperature.innerHTML = "Temperature: " + temp + " F";
                    humidity.innerHTML = "Humidity: " + hum + "%";
                    windSpeed.innerHTML = "Wind Speed " + wind + "MPH";
                    
                    temp1.innerHTML = "Temperature: " + temper1 + " F";
                    temp2.innerHTML = "Temperature: " + temper2 + " F"
                    temp3.innerHTML = "Temperature: " + temper3 + " F"
                    temp4.innerHTML = "Temperature: " + temper4 + " F"
                    temp5.innerHTML = "Temperature: " + temper5 + " F"
                    hume1.innerHTML = "Humidity: " + hum1 + "%"
                    hume2.innerHTML = "Humidity: " + hum2 + "%"
                    hume3.innerHTML = "Humidity: " + hum3 + "%"
                    hume4.innerHTML = "Humidity: " + hum4 + "%"
                    hume5.innerHTML = "Humidity: " + hum5 + "%"

                })
        })
})


