import React from "react";
import sunny from "../assets/sunny.svg"
import Cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/partlyCloudy.svg"
import Rainy from "../assets/Rainy.svg"


function WeatherCard(props) {
  const getForeCast = () => {
    switch (props.weather.forecast) {
      case 'Sunny':
        return sunny;
      case 'Partly cloudy':
        return partlyCloudy;
      case 'Rainy':
        return Rainy;
      case 'Cloudy':
        return Cloudy;
      case 'Snowy':
        return Cloudy;
    }
  }
  return (
    <div className="card">
      {props.weather.forecast &&
        <div className="img-container">
          <img className="card-img-top" src={getForeCast()} alt="Card image cap" id="icon" />
        </div> 
      }
      <div class="card-body">
        <h3 className="card-title">{props.weather.city}</h3>
        <h5 className="card-text">{props.weather.temperature}</h5>
        <h5 className="card-text">{props.weather.forecast}</h5>
      </div>
    </div>
  );
};

module.exports = WeatherCard;
