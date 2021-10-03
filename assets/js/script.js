var citySearchAll = [];
var cityEl = document.querySelector("#city");
var pastSearchEl = document.querySelector("#past-city-search");
var searchFormEl = document.querySelector(".search-form");
var searchButtonEl = document.querySelector("#search");
var currentTempEl = document.querySelector(".temp");
var currentHumidEl = document.querySelector(".humid");
var cityNameEl = document.querySelector("#city-name");
var currentWindEl = document.querySelector(".wind");
var uvIndexEl = document.querySelector(".uv-index");
var forecastEl = document.querySelectorAll(".forecast");

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
            else if (uvindex > 4 & uvindex < 8) {
              uvIndexEl.classList.add("badge");
              uvIndexEl.classList.add("badge-warning");
            }
            else {
              uvIndexEl.classList.add("badge");
              uvIndexEl.classList.add("badge-danger");
            }
          })
        })
        // retrieving the data for 5 day forecast
        var dailyUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,minutely,hourly,aalerts&appid=" + apiKey;
        fetch(dailyUrl)
        .then(function(response) {
          response.json().then(function(data) {
            // convert the dt time
            var unixDate = data["daily"][1]["dt"];
            var date = new Date(unixDate*1000);
            var forecastDate = date.toLocaleDateString("en-US");

            // add date to weather card
            var forecastDateEl = document.createElement("p");
            forecastDateEl.classList.add("forecast-date");
            forecastDateEl.textContent = forecastDate;
            forecastEl[0].appendChild(forecastDateEl);

            //create and add weather icon
            var forecastIcon = data["daily"][1]["weather"][0]["icon"];
            var forecastDesc = data["daily"][1]["weather"][0]["description"];
            var forecastIconEl = document.createElement("img");
            forecastIconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + forecastIcon + "@2x.png")
            forecastIconEl.setAttribute("alt", forecastDesc);
            forecastEl[0].append(forecastIconEl);

            // add temperature, humidity and wind to 5 day weather cards
            var forecastTemp = data["daily"][1]["temp"]["day"];
            var newForecastTemp = "Temperature: " + Math.round((((forecastTemp-273.5)*1.8)+32)) + "\xB0" + "F";
            console.log(newForecastTemp);
            var newForecastTempEl = document.createElement("p");
            newForecastTempEl.classList.add("forecast-temp");
            

            // var forecastHumid

            // var forecastWind



          // var unixDate = data["daily"][0]["dt"];
          // var date = new Date(unixDate*1000);
          // var day = [0, 8, 16, 24, 32];
          // var forecastCard = forecastEl.classlist.add("card-body");
          // console.log(forecastCard);
            // var unixDate = data["daily"][0]["dt"];
            // var date = new Date(unixDate*1000);
            // var forecastDate = date.toLocaleDateString("en-US");
            // console.log(forecastDate);
            // forecastEl.innerHTML = unixDate;
          });
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

 // //get five-day forecast
          // for (i = 0; i <forecastEl.length; i++) {
          //   forecastEl.innerHTML = "";
          //   var forecastDate = data["daily"]["dt"] * 1000;
          //   console.log(forecastDate);
    
          // }

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