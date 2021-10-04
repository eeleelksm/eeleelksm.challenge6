# Module 6 Challenge - Weather Dashboard

## Challenge Details
In this challenge we were asked to create a Weather Dashboard using OpenWeather API for a traveler who wants to see the weather outlook for multiple cities so they can plan their trip accordingly.

## Weather Dashboard Link
The application can be found at the following link: https://eeleelksm.github.io/eeleelksm.challenge6/

## Screenshots
![weatherdashboard-1](https://user-images.githubusercontent.com/40374896/135783104-c012fa0c-f8ea-4896-bcfe-b1b4ff9a0a30.png)
When the user opens the application, they are presented with a two columns. One where they may enter the name of a city to search for the weather. The other column shows the two displays for the weather: The current day and the next 5 days of weather in that city.


![weatherdashboard-2](https://user-images.githubusercontent.com/40374896/135783347-db1c15a8-675b-40c6-8230-43c5db687fea.png)
Once the city is entered, the user is shown the current weather and the 5 day forecast. This includes the temperature, wind, humidity, and the UV index of that city. They are also shown an icon of what the weather will bring for the day and the remaining week.


![weatherdashboard-3](https://user-images.githubusercontent.com/40374896/135783443-296b2b52-a845-4b9d-b355-d32f18fb5fb5.png)
When another city is searched, the screen is cleared and shows the new weather forecasts. In the left column previous city searches will appear as a button.

## What Needs Work
#### LocalStorage
- LocalStorage is not executing correctly or as intended. Buttons for previous cities do appear, but when the user clicks on the button, the application does not bring the user back to the previous city's weather forecast.
#### Search Bar Error
- When a city is spelled incorrectly or doesn't exist, the text that the user put into the search bar will still appear listed as a button with the other previous cities searched.
#### Weather Card Spacing
- The 5 day forecast weather cards are not evenly distributed with the space that's provided.
