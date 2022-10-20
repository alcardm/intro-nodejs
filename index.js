const axios = require("axios");

console.log("🖖");

let apiKey = "d09b9795e856a1eeb8f8e90d3eb67840";
let city = "Tunja, col";

let requestConfig = {
  url:
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey,
};
// console.log(requestConfig);

let objPromesa = axios(requestConfig);

objPromesa
  .then(function (response) {
    // Consultar la documentación de la API para revisar cuales
    // está retornando la consulta
    // https://openweathermap.org/current#name

    // Debug
    // console.log(response);
    // console.log(response.data);
    console.log(
      "La temperatura en " +
        city +
        " es " +
        (response.data.main.temp - 273.15).toFixed(2).toString() +
        "°C."
    );
  })
  .catch(function (err) {
    console.log(err);
  });
