//weather api

let request = new XMLHttpRequest ();

request.open('GET', " https://api.darksky.net/forecast/1778cc0d0f62e65c0b1e805adab619f5/40.7127,-74.0059", true);

request.onload = function () {
  //access JSON data here

  let data = JSON.parse(this.response);

  console.log(data);
  // data.forEach(weather => {
  //   console.log(weather.title);
  // })
}


//sending request
request.send();

console.log("Hello");
