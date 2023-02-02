var button = document.querySelector('#button');
var inputValue = document.querySelector('#inputValue');
var cityName = document.querySelector('#cityName');
var currentTemp = document.querySelector('#currentTemp');
var currentWind = document.querySelector('#currentWind');
var currentHumidity = document.querySelector('#currentHumid');


var requestCurrentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&appid=f0e4186a58886c6660c2a64b6aa34197";

fetch(requestCurrentUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let nameValue = data["name"];
        let tempValue = data["main", "temp"];
        let windValue = data["wind"];
        let humidValue = data["main", "humidity"];

        cityName.innerHTML = nameValue;
        currentTemp.innerHTML = tempValue;
        currentWind.innerHTML = windValue;
        currentHumidity.innerHTML = humidValue;
    });

button.addEventListener('click', )









//var inputValue = document.querySelector('.inputValue');
//var displayCurrent = document.querySelector('.display');
//var name = document.querySelector('.cityName');
//var currentTemp = document.querySelector('.currentTemp');
//var currentWind = document.querySelector('.currentWind');
//var currentHumidity = document.querySelector('.currentHumid');

//button.addEventListener('click', function getAPI() {

  //  var requestCurrentUrl = 'http://api.openweathermap.org/geo/1.0/direct?q="+inputValue+"&appid=f0e4186a58886c6660c2a64b6aa34197';

    //fetch(requestCurrentUrl)
      //  .then(function (response) {
        //    return response.json();
       // })
      //  .then(function (data) {
    //        console.log(data);
  //      })

//});
  //  .then(response => response.json())
    //.then(data => {
      //  var nameValue = data['name'];
        //var tempValue = data['main']['temp'];
       // var windValue = data['weather'][0]['wind'];
        //var humidityValue = data['main']['wind'];

        //cityName.innerHTML = nameValue;
        //currentTemp.innerHTML = tempValue;
        //currentWind.innerHTML = windValue;
        //currentHumidity.innerHTML = humidityValue;
    //})

//.catch(err => alert("Wrong City Name!"))
//})

