import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Api';
import { useState } from 'react';
import Forecast from './components/forecast/forecast';
import Location from './components/location/location';

function App() {
  const [currentweather, setcurrentweather] = useState(null);
  const [forecast, setforecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setcurrentweather({ city: searchData.label, ...weatherResponse });
        setforecast({ city: searchData.label, forecastResponse });
      })
      .catch((err) => console.log(err));

  }
  const handleLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=> {
        handleOnSearchChange({ value:`${position.coords.latitude} ${position.coords.longitude}`});
    })
  }
    else {
    alert('Geolocation is not supported by your browser');
  }
}
return (
  <div className="container">
    <Search onSearchChange={handleOnSearchChange} />
    <div className='location'><button onClick={handleLocation}><Location /></button></div>
    {currentweather && <CurrentWeather data={currentweather} />}
    {forecast && <Forecast data={forecast} />}
  </div>
);
}

export default App;
