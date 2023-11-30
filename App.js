import React, {useState} from 'react';
import cities from './data';
import WeatherCard from './components/WeatherCard'
import Location from './components/Location'


function App() {
    const [locationState, setLocationState] = useState("Paris")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {cities.map((weatherData) => <WeatherCard weather = {weatherData}/>)}
            </div>
            <Location data={cities} location={locationState} />
        </>
    )
}

export default App;