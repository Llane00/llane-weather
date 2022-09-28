#!/usr/bin/env node

const { getWeather, showErrorMsg } = require('./service/base.js')

function getWeatherData(currentDataArr, index) {
  var currentWeatherInfo = currentDataArr
  var infoContent = (index === 0 ? '* ' : '  ') + currentWeatherInfo.date + ' | temperature: ' + currentWeatherInfo.low + ' ~ ' + currentWeatherInfo.high + '℃ | weather: ' + currentWeatherInfo.text_day + ' ~ ' + currentWeatherInfo.text_night
  return infoContent
}

function renderHeadInfo(weatherData) {
  console.log(weatherData.location.name)
}

function renderWeatherData(weatherDataArr) {
  for (var i = 0; i < weatherDataArr.length; i++) {
    infoContent = getWeatherData(weatherDataArr[i], i)
    console.log(infoContent)
  }
}

function render(weatherData) {
  renderHeadInfo(weatherData)
  renderWeatherData(weatherData.daily)
  console.log('\r\nHave a nice day!')
}

function run() {
  var data = {}
  if (process.argv[2]) {
    data.location = process.argv[2]
  }

  getWeather(data)
    .then((res) => {
      if (res.status === 200 && res.data.results && res.data.results[0]) {
        render(res.data.results[0])
      } else {
        showErrorMsg(res)
      }
    })
    .catch((error) => {
      showErrorMsg(error)
    })
}

run()
