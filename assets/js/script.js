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
var iconEl = document.querySelector("#current-icon");

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
        var icon = data["weather"][0]["icon"];
        var lat = data['coord']['lat'];
        var lon = data['coord']['lon'];
       

        // adding into HTML for current weather section
        cityNameEl.innerHTML = apiName + " - " + moment().format("dddd (L)");
        iconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
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

            for (i = 1; i < forecastEl.length; i++) {
              // convert the dt time
              var unixDate = data["daily"][i]["dt"];
              var date = new Date(unixDate*1000);
              var forecastDate = date.toLocaleDateString("en-US");

              // add date to weather card
              var forecastDateEl = document.createElement("p");
              forecastDateEl.classList.add("forecast-date");
              forecastDateEl.textContent = forecastDate;
              forecastEl[i-1].append(forecastDateEl);

              //create and add weather icon
              var forecastIcon = data["daily"][i]["weather"][0]["icon"];
              var forecastDesc = data["daily"][i]["weather"][0]["description"];
              var forecastIconEl = document.createElement("img");
              forecastIconEl.setAttribute("src", "https://openweathermap.org/img/wn/" + forecastIcon + "@2x.png")
              forecastIconEl.setAttribute("alt", forecastDesc);
              forecastEl[i-1].append(forecastIconEl);

              // add temperature to 5 day weather cards
              var forecastTemp = data["daily"][i]["temp"]["day"];
              var newForecastTemp = "Temperature: " + Math.round((((forecastTemp-273.5)*1.8)+32)) + "\xB0" + "F";
              var newForecastTempEl = document.createElement("p");
              newForecastTempEl.classList.add("forecast-temp");
              newForecastTempEl.textContent = newForecastTemp;
              forecastEl[i-1].append(newForecastTempEl);

              // add humidity to 5 day weather cards
              var forecastHumid = data["daily"][i]["humidity"];
              var newForecastHumid = "Humidity: " + forecastHumid + "%";
              var newForecastHumidEl = document.createElement("p");
              newForecastHumidEl.classList.add("forecast-humid");
              newForecastHumidEl.textContent = newForecastHumid;
              forecastEl[i-1].append(newForecastHumidEl);

              // add wind to 5 day weather cards
              var forecastWind = data["daily"][i]["wind_speed"];
              var newForecastWind = "Wind Speed: " + forecastWind + " MPH";
              var newForecastWindEl = document.createElement("p");
              newForecastWindEl.classList.add("forecast-wind");
              newForecastWindEl.textContent = newForecastWind;
              forecastEl[i-1].append(newForecastWindEl);
            }



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