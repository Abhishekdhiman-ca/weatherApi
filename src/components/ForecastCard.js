import React from 'react';

const ForecastCard = ({ data }) => {
  return (
    <div className="col-md-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.day}</h5>
          <p className="card-text"><strong>High:</strong> {data.high}°C</p>
          <p className="card-text"><strong>Low:</strong> {data.low}°C</p>
          <p className="card-text"><strong>Forecast:</strong> {data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
