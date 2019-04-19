import Keys from '../keys'

const API_BASE_PATH = 'https://api.openweathermap.org/data/2.5/'

export default class WeatherService {
  static fetchFiveDayForecast(location) {
    return new Promise(
      _getPromiseCallbackForRequestTypeAndLocation('forecast/daily', location)
    )
  }

  static fetchCurrentWeather(location) {
    return new Promise(
      _getPromiseCallbackForRequestTypeAndLocation('weather', location)
    )
  }
}

function _getPromiseCallbackForRequestTypeAndLocation(requestType, location) {
  return async (resolve, reject) => {
    try {
      const requestUrl = _assembleRequestUrl(requestType, location)
      const response = await fetch(requestUrl)
      resolve(await response.json())
    } catch (e) {
      reject(e)
    }
  }
}

function _assembleRequestUrl(requestType, location) {
  return `${API_BASE_PATH}${requestType}?q=${location}&mode=json&appid=${
    Keys.OPEN_WEATHER_API
    }&units=imperial`
}
