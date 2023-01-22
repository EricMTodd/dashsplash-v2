import { useEffect } from 'react'

const Clock = () => {
  const initializeClock = () => {
    const date = new Date()
    let hour = date.getHours()
    if (hour > 12) {
      hour = hour - 12
    }
    let minute = date.getMinutes()
    if (minute < 10) {
      minute = '0' + minute
    }
    let currentMeridiem
    if (hour > 12) {
      currentMeridiem = 'AM'
    } else {
      currentMeridiem = 'PM'
    }
    document.querySelector('#clock').innerHTML = `${hour}:${minute} ${currentMeridiem}`
    setTimeout(initializeClock, 1000)
  }

  useEffect(() => {
    initializeClock()
  }, [])

  return(
    <div id='clock-container'>
      <h1 id='clock'>0:00</h1>
    </div>
  )
}

export default Clock