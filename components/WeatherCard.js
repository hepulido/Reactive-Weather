import React from "react";
import sunny from "../assets/sunny.svg"


function WeatherCard(props) {
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {sunny} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.weather.city}</h3>
            <h5 className="card-text">{props.weather.temperature}</h5>
            <h5 className="card-text">{props.weather.forecast}</h5>
        </div>
    </div>
  );
};

module.exports = WeatherCard;
