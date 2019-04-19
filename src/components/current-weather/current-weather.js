/*===================================================
                   IMPORTS / SETUP
====================================================*/
import React, { Fragment, useState } from 'react'
import './current-weather.css'
import '../../App.css'
import { useUpdatingFormattedDate } from '../../hooks'
import { capitalize } from '../../utils/string'

/*===================================================
                  COMPONENT DEFINITION
====================================================*/
function CurrentWeather({ currentWeatherData, city, onChangeWeather }) {
  const [date] = useUpdatingFormattedDate(10000)
  const [cityText, updateCityText] = useState('')
  const handleClick = () => {
    updateCityText('')
    onChangeWeather(cityText)
  }

  return (
    <header className="current-weather-container">
      <div>
        <p className="current-time-text">{date}</p>
        {!!currentWeatherData && (
          <Fragment>
            <p className="min-max-text">
              Max {Math.round(currentWeatherData.max)}º | Min{' '}
              {Math.round(currentWeatherData.min)}º
            </p>
            <h1 className="current-temp-text">
              {Math.round(currentWeatherData.current)}ºF
            </h1>
          </Fragment>
        )}
      </div>
      <div className="city-container">
        <h1>{capitalize(city)}</h1>
        <input type="text" value={cityText} placeholder="Enter city" onChange={e => updateCityText(e.target.value)} />
        <button onClick={handleClick}>Submit</button>
      </div>
    </header>
  )
}

export default CurrentWeather
