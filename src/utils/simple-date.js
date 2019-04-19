import format from 'date-fns/format'
import distanceInWords from 'date-fns/distance_in_words'

export default class SimpleDate {
  constructor(...args) {
    this._date = new Date(...args)
  }

  get formattedCurrentTime() {
    return format(new Date(), 'MMMM D, h:mm a')
  }

  get distanceFromCurrentTime() {
    return distanceInWords(new Date(), this._date)
  }

  get formatted() {
    return format(this._date, 'dddd, MMM D')
  }
}
