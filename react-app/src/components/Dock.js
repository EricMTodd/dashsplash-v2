import Clock from './Clock'
import Weather from './Weather'

const Dock = () => {

  return(
    <div id='dock-container'>
      <div id='dock-haze'>
      </div>
      <div id='dock-content'>
        <Weather />
        <Clock />
      </div>
    </div>
  )
}

export default Dock