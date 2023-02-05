import { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = () => {
  const APIKey = '8d9b598296f463cb05d7baea7c741c65'
  const cityName = 'Denver'
  const [icon, setIcon] = useState()

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`)
    .then(response => {
      console.log(response.data.weather[0].icon)
      setIcon(response.data.weather[0].icon)
    }).catch(error => console.log(error))
  }, [])

  return(
    <div id='weather-container'>
      {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon'/> */}
      pass
    </div>
  )
}

export default Weather