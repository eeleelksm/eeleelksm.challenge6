var allCities = [];
var searchFormEl = document.querySelector("#search-form");
var cityEl = document.querySelector("#city");

// save cities viewed into local storage
var saveSearch = function() {
  localStorage.item("allCities", JSON.stringify(allCities));
}

var getWeather = function(lat, lon) {
  // formatting the weather API
  var apiKey = "c9c512d1b8bc842f2acb7dc528d85eb3";
  var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=" + apiKey;

  fetch(apiUrl)
  .then(function(response) {
    response.json.then(function(data) {
      console.log(data, lat, lon);
    });
  });
};



// var formSubmitHandler = function(event) {
//   event.preventDefault();
//   console.log(event);
//    var city = searchFormEl.value.trim();
//       if (city) {
  //      
//       }
// }


// var getWeather = function(lat, lon) {
//   // formatting the weather API
//   var apiKey = "c9c512d1b8bc842f2acb7dc528d85eb3";
//   var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=" + apiKey;

//   // make a request to the url
//   fetch(apiUrl)
//   .then(function(response) {
//     response.json().then(function(data) {
//       console.log(data);
//     });
//   });
// };

// searchFormEl.addEventListener("submit", formSubmitHandler);