import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const fetchWeatherData = async () => {
  const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Toronto&format=json&u=f';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3a14cfe441msh4ad1257bc0b0f87p17c5b2jsncd717282462f',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

const convertFahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5 / 9).toFixed(2);
};

const WeatherApp = ({ backgroundImage }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  const fetchData = async () => {
    const data = await fetchWeatherData();
    setWeatherData(data);
  };

  const handleFetchData = () => {
    fetchData();
  };

  if (!weatherData) {
    return <div className="container mt-5">Loading...</div>;
  }

  const { condition, atmosphere, wind } = weatherData.current_observation;

  return (
    <div className="container mt-5" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <h1 className="text-center mb-4">Current Weather</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Temperature</h5>
              <p className="card-text">{convertFahrenheitToCelsius(condition.temperature)}°C</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Humidity</h5>
              <p className="card-text">{atmosphere.humidity}%</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Status</h5>
              <p className="card-text">{condition.text}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Wind Speed</h5>
              <p className="card-text">{wind.speed} km/h</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6 col-lg-3 mb-3">
          <DatePicker
            className="form-control"
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            inline
          />
        </div>
        <button className="btn btn-primary" onClick={handleFetchData}>
          Get Weather Data
        </button>
      </div>
    </div>
  );
};

export default WeatherApp;
