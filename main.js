#!/user/bin/env node

var axios = require('axios');
var date = new Date;
var data = {};
data.params = {
  key: 'qwwpyhirhh0lvded',
  location: 'shanghai',
  language: 'zh-Hans',
  unit: 'c'
};
if(process.argv[2]){
  data.params.location = process.argv[2];
}

axios.get('https://api.seniverse.com/v3/weather/now.json', data)
  .then(function (res) {
    var weatherData = res.data.results[0];
    console.log();
    console.log('------------------')
    console.log('日期: ' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());
    console.log('城市: ' + weatherData.location.name);
    console.log('气温: ' + weatherData.now.temperature +'℃');
    console.log('天气: ' + weatherData.now.text);
    console.log('------------------');
    console.log('Have a nice day');
  })
  .catch(function (error) {
    console.log(error);
  })