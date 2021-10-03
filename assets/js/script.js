var citySearchAll = [];
var cityEl = document.querySelector("#city");
var pastSearchEl = document.querySelector("#past-city-search");
var searchFormEl = document.querySelector(".search-form");
var searchButtonEl = document.querySelector("#search");
var todaysWeatherEl = document.querySelector(".today-weather")
var fiveWeatherEl = document.querySelector("#fiveday-full")
var currentTempEl = document.querySelector(".temp");
var currentHumidEl = document.querySelector(".humid");
var cityNameEl = document.querySelector("#city-name");
var currentWindEl = document.querySelector(".wind");
var uvIndexEl = document.querySelector(".uv-index");

var apiKey = "c9c512d1b8bc842f2acb7dc528d85eb3";

// execute a current weather report from Open Weather API
var getWeather = function(cityName) {
  // formatting the weather API url
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

  // make  request to the url
  fetch(apiUrl)
  .then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        // getting city name and weather attributes to add to application
        var apiName = data['name'];
        var apiTemp = data['main']['temp'];
        var apiHumid = data['main']['humidity'];
        var apiWind = data['wind']['speed'];
        var lat = data['coord']['lat'];
        var lon = data['coord']['lon'];
        console.log(apiName);
        console.log(apiTemp);
        console.log(apiHumid);
        console.log(lat);
        console.log(lon);

        cityNameEl.innerHTML = apiName + " - " + moment().format("dddd (L)");
        currentTempEl.innerHTML = "Temperature: " + Math.round((((apiTemp-273.5)*1.8)+32)) + "\xB0" + "F";
        currentHumidEl.innerHTML = "Humidity: " + apiHumid + "%";
        currentWindEl.innerHTML = "Wind: " + apiWind + " MPH";

        // retrieving the UV index using latitude and longitude
        var uviUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + apiKey;
        fetch(uviUrl)
        .then(function(response) {
          response.json().then(function(data) {
            var uvindex = data['current']['uvi'];
            uvIndexEl.innerHTML = "UV Index: " + uvindex;

            // based on uv index, if good shows green, if ok shows yellow, if bad shows red
            if (uvindex < 4) {
              uvIndexEl.classList.add("badge");
              uvIndexEl.classList.add("badge-success");
            } 
            else if (uvindex < 8) {
              uvIndexEl.classList.add("badge");
              uvIndexEl.classList.add("badge-warning");
            }
            else {
              uvIndexEl.classList.add("badge");
              uvIndexEl.classList.add("badge-danger");
            }
          })
          
          //get five-day forecast

        })
      });
    } else { 
      alert("Incorrect city name. Try again.");
    }
  })
  .catch(function(error) {
    alert("Unable to retrieve this city's weather.")
  })
};

searchButtonEl.addEventListener("click", function() {
  event.preventDefault();
  console.log(cityEl.value);
  getWeather(cityEl.value);
 })

// display the current weather
//display name of city



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