var allCities = [];
var apiKey = "c9c512d1b8bc842f2acb7dc528d85eb3";
var cityEl = document.querySelector("#city");
var pastSearchEl = document.querySelector("#past-search");
var searchFormEl = document.querySelector("#search-form");
var SearchButtonEl = document.querySelector(".search-button");


// execute a current weather report from Open Weather API
var getWeather = function(cityName) {
  // formatting the weather API url
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

  // make  request to the url
  fetch(apiUrl)
  .then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  })
};

getWeather();

// Get Temperature

// Get Humidity

// Get UV Index

// 5 Day Forecast

// // save cities viewed into local storage
// var saveSearch = function() {
//   localStorage.item("allCities", JSON.stringify(allCities));
// }

/**
 * var formSubmitHander = function() {
 *  event.preventDefault();
 *  console.log(event)
 * }
 * 
 * 
 * 
 * 
 */