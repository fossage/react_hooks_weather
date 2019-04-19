import drizzle from '../images/drizzle.png'
import heavyRain from '../images/heavy-rain.png'
import heavysnow from '../images/heavy-snow.png'
import lightning from '../images/lightning.png'
import moon from '../images/moon.png'
import partlyCloudyMoon from '../images/partly-cloudy-moon.png'
import partlySunny from '../images/partly-sunny.png'
import sunny from '../images/sunny.png'
import thermometer from '../images/thermometer.png'

function getImage(code) {
  if (/01d/.test(code)) {
    return sunny
  } else if (/01n/.test(code)) {
    return moon
  } else if (/02d|03d|04d/.test(code)) {
    return partlySunny
  } else if (/02n|03n|04n/.test(code)) {
    return partlyCloudyMoon
  } else if (/10d/.test(code)) {
    return drizzle
  } else if (/09d/.test(code)) {
    return heavyRain
  } else if (/13d/.test(code)) {
    return heavysnow
  } else if (/11d/.test(code)) {
    return lightning
  } else if (/01d/.test(code)) {
    return sunny
  } else {
    return thermometer
  }
}

export { getImage }