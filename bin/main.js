#!/usr/bin/env node

const { getWeatherInfo, showErrorMsg } = require('./service/base.js')

function getWeatherInfoStr(weatherInfo, index) {
  var infoContent = `${index === 0 ? '* ' : '  '}${weatherInfo.date} | temperature: ${weatherInfo.low} ~ ${weatherInfo.high} ℃ | weather: ${weatherInfo.text_day} ~ ${weatherInfo.text_night}`
  return infoContent
}

function renderHeader(weatherData) {
  console.log(weatherData.location.name)
}

function renderMain(weatherDataArr) {
  for (var i = 0; i < weatherDataArr.length; i++) {
    infoContent = getWeatherInfoStr(weatherDataArr[i], i)
    console.log(infoContent)
  }
}

function renderFooter() {
  console.log('\r\nHave a nice day!')
}

function render(weatherData) {
  renderHeader(weatherData)
  renderMain(weatherData.daily)
  renderFooter()
}

function run() {
  var data = {}
  if (process.argv[2]) {
    data.location = process.argv[2]
  }

  getWeatherInfo(data)
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
