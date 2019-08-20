# llane-weather
a npm package to get weather forecast

>一个 可以获取 特定城市天气的 npm

how to install :

```
npm install -g llane-weather
```

how to use : 

weather + 城市拼音

```
//like：

weather shanghai

//or

weather
```

If you don't use the city parameter, the default city is shanghai.  
不加城市参数，默认城市为shanghai。

You can change the default value in configs.js.  
你可以在configs.js文件中修改默认值。

Due to API limitations, the city is limited to China.  
目前接口能查询的城市范围仅限中国国内。