/*===================================================
                   IMPORTS / SETUP
====================================================*/
import React from 'react'
import './forecast.css'
import '../../App.css'
import SimpleDate from '../../utils/simple-date'
import { capitalize } from '../../utils/string'
import { getImage } from '../../utils/images'

/*===================================================
                  COMPONENT DEFINITION
====================================================*/
function Forecast({ forecast }) {
  if (!forecast) return null
  return (
    <div className="container">
      {forecast.map(item => (
        <div className="weather-item-container" key={item.dt}>
          <div className="weather-item-inner-container">
            <div>
              <h3 className="date-heading">{getFormattedDate(item.dt)}</h3>
              <p className="weather-description">{capitalize(item.weather[0].description)}</p>
            </div>
          </div>
          <div className="temp-and-img-container">
            <img className="weather-img" alt="" src={getImage(item.weather[0].icon)} />
            <div className="temp-min-max-container">
              <p className="temp-min-max-text">{Math.round(item.temp.max)}º</p>
              <p className="temp-min-max-text">{Math.round(item.temp.min)}º</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/*===================================================
                     HELPERS
====================================================*/
function getFormattedDate(dt) {
  const fixedDate = Number.parseInt(dt.toString() + '000')
  return new SimpleDate(fixedDate).formatted
}

export default Forecast