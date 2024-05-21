import React from 'react';

const CurrentWeather = ({ data }) => {
  const { condition, atmosphere, wind } = data;

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <p><strong>Temperature:</strong> {condition.temperature}°C</p>
      <p><strong>Humidity:</strong> {atmosphere.humidity}%</p>
      <p><strong>Status:</strong> {condition.text}</p>
      <p><strong>Wind Speed:</strong> {wind.speed} km/h</p>
    </div>
  );
};

export default CurrentWeather;
