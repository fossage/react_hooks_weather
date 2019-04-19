/*===================================================
                   IMPORTS / SETUP
====================================================*/
import React, { useState, useEffect } from 'react'

import './App.css'
import WeatherService from './services/weather-service'
import CurrentWeather from './components/current-weather'
import Forecast from './components/forecast/forecast';
import { useInterval } from './hooks'
/*===================================================
                  COMPONENT DEFINITION
====================================================*/
function App() {
  const [forecast, updateForecast] = useState(null)
  const [currentWeather, updateCurrentWeather] = useState(null)
  const [selectedCity, updateSelectedCity] = useState('seattle')

  useEffect(() => {
    fetchAllWeatherData(selectedCity).then(([forecast, currentWeather]) => {
      updateForecast(forecast)
      updateCurrentWeather(parseCurrentWeather(currentWeather))
    })
  }, [selectedCity])

  useInterval(async () => {
    const currentWeather = await WeatherService.fetchCurrentWeather(selectedCity)
    updateCurrentWeather(parseCurrentWeather(currentWeather))
  }, 30000)

  return (
    <div className="App">
      <CurrentWeather
        currentWeatherData={currentWeather}
        city={selectedCity}
        onChangeWeather={updateSelectedCity}
      />
      <Forecast forecast={forecast} />
    </div>
  )
}

/*===================================================
                     HELPERS
====================================================*/
async function fetchAllWeatherData(selectedCity) {
  const [forecast, current] = await Promise.all([
    WeatherService.fetchFiveDayForecast(selectedCity),
    WeatherService.fetchCurrentWeather(selectedCity),
  ])

  return [forecast.list, current]
}

function parseCurrentWeather(weatherData) {
  if (!weatherData) return null

  return {
    current: weatherData.main.temp,
    max: weatherData.main.temp_max,
    min: weatherData.main.temp_min
  }
}



export default App