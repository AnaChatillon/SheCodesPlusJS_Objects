let weather = {};
console.log(weather);

weather = {
  temp: 25,
  humidity: 62,
};
console.log(weather);

console.log(weather.temp);
console.log(weather.humidity);

weather.windSpeed = 4;
console.log(weather.windSpeed);

console.log(weather["temp"]);
console.log(weather["humidity"]);
console.log(weather["windSpeed"]);

let forecast = [
  {
    day: "Monday",
    temp: 25,
  },
  {
    day: "Tuesday",
    temp: 26,
  },
  {
    day: "Wednesday",
    temp: 30,
  },
  {
    day: "Thursday",
    temp: 14,
  },
  {
    day: "Friday",
    temp: 22,
  },
];
console.log(forecast);

console.log(forecast[0].temp); //temperatura para amanhã
console.log(forecast[0].day); //qual é o dia

console.log(
  `The temperature for tomorrow, ${forecast[0].day}, will be ${forecast[0].temp} degrees.`
);
console.log(
  `The temperature for the day after tomorrow, ${forecast[1].day}, will be ${forecast[1].temp} degrees.`
);
