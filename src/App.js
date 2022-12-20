import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    async function fetchWeatherData() {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8ebe36cb479c8458655e2f6bd5c217fe');
      const data = await response.json();
      setWeatherData(data);
    }
    fetchWeatherData();
  }, []);

  return (
    <div className="weather-app">
      <h1>Weather in {weatherData.name}</h1>
      <p>Temperature: {weatherData.main.temp}°F</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
    </div>
  );
}

export default WeatherApp;
