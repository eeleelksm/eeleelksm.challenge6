var citySearchAll = [];
var cityEl = document.querySelector(".city");
var pastSearchEl = document.querySelector(".past-search");
var searchFormEl = document.querySelector(".search-form");
var searchButtonEl = document.querySelector(".search-button");
var todaysWeatherEl = document.querySelector(".today-weather")
var fiveWeatherEl = document.querySelector(".fiveday-full")

var apiKey = "c9c512d1b8bc842f2acb7dc528d85eb3";

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


searchButtonEl.addEventListener("click", function() {
  console.log("yes");
 })

// Get Current Weather 

// Get Temperature

// Get Humidity

// Get UV Index

// 5 Day Forecast


 

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