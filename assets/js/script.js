var getWeather = function(lat, lon) {
  // formatting the weather API
  var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=c9c512d1b8bc842f2acb7dc528d85eb3";

  // make a request to the url
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

// var getWeather = function() {
//   console.log("hello where's the weather");
// };

// getWeather();