var axios = require('axios')
const configs = require('../configs')

function getWeather(data = {}) {
  const defaultParams = {
    key: 'qwwpyhirhh0lvded',
    location: '',
    language: '',
    unit: '',
    start: 0,
    days: 5,
  }

  requestData = {
    params: {
      ...defaultParams,
      ...configs,
      ...data,
    },
  }

  return axios.get('https://api.seniverse.com/v3/weather/daily.json', requestData)
}

function showErrorMsg(res) {
  const errorInfo = res.response.data
  if (errorInfo.status && errorInfo.status_code !== 'AP010003') {
    console.log('Error:', errorInfo.status)
    return
  }
  console.log('Sorry: Weather server error.')
}

module.exports = {
  getWeather,
  showErrorMsg,
}
