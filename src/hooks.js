/*===================================================
                   IMPORTS / SETUP
====================================================*/
import {useState, useRef, useEffect} from 'react'
import SimpleDate from './utils/simple-date'

/*===================================================
                  HOOK DEFINITIONS
====================================================*/
function useUpdatingFormattedDate(updateAfter) {
  const [date,
    updateDate] = useState(getFormattedDate())

  useInterval(() => {
    const newDate = getFormattedDate()

    if (newDate !== date) {
      updateDate(newDate)
    }
  }, updateAfter)

  return [date]
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(savedCallback.current, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

/*===================================================
                     HELPERS
====================================================*/
function getFormattedDate() {
  return new SimpleDate().formattedCurrentTime
}

export {useUpdatingFormattedDate, useInterval}