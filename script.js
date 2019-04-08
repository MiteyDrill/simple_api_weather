//weather api

let request = new XMLHttpRequest ();

//get location

if ("geolocation" in navigator){

  navigator.geolocation.getCurrentPosition(function(position) {


  request.open('GET', " https://api.darksky.net/forecast/[KEY]/" + position.coords.latitude + "," + position.coords.longitude  + "", true);


  request.onload = function () {
    //access JSON data here

    let data = JSON.parse(this.response);

    console.log(data);

    //set/grab default variables
    let temp = -1;
    let summ = "default description";
    let wind_speed = -1;
    let rain_chance = -1;
    let icon = "clear_day";

    temp = data.currently.apparentTemperature;
    summ = data.currently.summary;
    wind_speed = data.currently.windSpeed;
    rain_chance = data.currently.humidity*100;
    icon = data.currently.icon;

    document.getElementById('weather-summary').innerHTML = summ;
    document.getElementById('temperature').innerHTML = temp;
    document.getElementById('wind-speed').innerHTML = wind_speed + " mph";
    document.getElementById('rain-chance').innerHTML = rain_chance + "%";

    document.getElementById('image').src="./images/" + icon + ".png";


  }


  //sending request
  request.send();

  });
} else {

  document.write("Geolocation unavailable");

}
