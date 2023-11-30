import React, {useState} from 'react';
import cities from './data';
import WeatherCard from './components/WeatherCard'
import Location from './components/Location'
import Form from './components/Form';


function App() {
    const [locationState, setLocationState] = useState("Paris")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <Form  setLocationState={setLocationState}/>
            <div className = "app">
                {cities.map((weatherData, i) => <WeatherCard key={i} weather = {weatherData}/>)}
            </div>
            <Location data={cities} location={locationState} />
        </>
    )
}

export default App;