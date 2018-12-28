#!/usr/bin/env node

var axios = require('axios');
var date = new Date;
var data = {};

data.params = {
  key: 'qwwpyhirhh0lvded',
  location: 'shanghai',
  language: 'zh-Hans',
  unit: 'c',
  start: 0,
  days: 5,
};

if(process.argv[2]) {
  data.params.location = process.argv[2];
}

axios.get('https://api.seniverse.com/v3/weather/daily.json', data)
  .then(function (res) {
    var weatherDataArr = res.data.results[0];
    console.log('city: ' + weatherDataArr.location.name);
    console.log('date: ' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());
    console.log();
    var weatherDataArr = weatherDataArr.daily;
    for(var i = 0; i < weatherDataArr.length; i++) {
      var currentWeatherInfo = weatherDataArr[i];
      var infoContent = '| date: ' + currentWeatherInfo.date + ' | temperature: ' + currentWeatherInfo.low + ' ~ ' + currentWeatherInfo.high + '℃ | weather: ' + currentWeatherInfo.text_day + '|';
      var infoContentlength = infoContent.length;
      var borderStr = ' ';
      for(var j = 0; j < infoContentlength; j++) {
        borderStr += '-';
      }
      console.log(borderStr);
      console.log(infoContent);
      console.log(borderStr);
      console.log();
    }
    console.log('Have a nice day!');
  })
  .catch(function (error) {
    console.log(error);
  })