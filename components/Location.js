import React from 'react';
import sunny from "../assets/sunny.svg"
import Cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/partlyCloudy.svg"
import Rainy from "../assets/Rainy.svg"

function Location({ data, location }) {
    const findLocation = () => {
        return data.find((item) => item.city === location)
    }
    const cityData = findLocation()
    const getForeCast = () => {
        switch (cityData.forecast) {
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
        <>
            <h1 className="title">REACTIVE WEATHER</h1>
            <h3 className="subtitle">Up to the minute weather news</h3>
            <div className="app">
                <div className="card">
                    {cityData.forecast &&
                        <div className="img-container">
                            <img className="card-img-top" src={getForeCast()} alt="Card image cap" id="icon" />
                        </div>
                    }
                    <div className="card-body">
                        <h3 className="card-title">{cityData.city}</h3>
                        <h5 className="card-text">{cityData.temperature}</h5>
                        <h5 className="card-text">{cityData.forecast}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location;