#!/usr/bin/env node

const configs = require("./configs.js");

var axios = require('axios');
var data = {};

data.params = {
  key: 'qwwpyhirhh0lvded',
  location: '',
  language: '',
  unit: '',
  start: 0,
  days: 5,
};

function setConfigValue(requireData, configData) {
  requireData.location = configData.location;
  requireData.language = configData.language;
  requireData.unit = configData.unit;
}

function getDataStr() {
  var date = new Date;
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

function getWeatherData(currentDataArr) {
  var currentWeatherInfo = currentDataArr;
  var infoContent = '| date: ' + currentWeatherInfo.date + ' | temperature: ' + currentWeatherInfo.low + ' ~ ' + currentWeatherInfo.high + '℃ | weather: ' + currentWeatherInfo.text_day + '|';
  return infoContent;
}

function getBorderStr(infoContentlength) {
  var borderStr = ' ';
  for (var j = 0; j < infoContentlength; j++) {
    borderStr += '-';
  }
  return borderStr;
}

function renderWeatherData(weatherDataArr) {
  for (var i = 0; i < weatherDataArr.length; i++) {
    infoContent = getWeatherData(weatherDataArr[i]);
    borderStr = getBorderStr(infoContent.length);
    console.log(borderStr);
    console.log(infoContent);
    console.log(borderStr);
    console.log();
  }
}

setConfigValue(data.params, configs);

if (process.argv[2]) {
  data.params.location = process.argv[2];
}

axios.get('https://api.seniverse.com/v3/weather/daily.json', data)
  .then(function (res) {
    var weatherDataArr = res.data.results[0];
    console.log();
    console.log('city: ' + weatherDataArr.location.name);
    console.log('date: ' + getDataStr());
    console.log();
    var weatherDataArr = weatherDataArr.daily;
    renderWeatherData(weatherDataArr);
    console.log('Have a nice day!');
  })
  .catch(function (error) {
    console.log(error.response.data.status);
  })