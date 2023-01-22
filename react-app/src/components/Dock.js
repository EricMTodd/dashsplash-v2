import Clock from './Clock'

const Dock = () => {

  return(
    <div id='dock-container'>
      <div id='dock-haze'>
      </div>
      <div id='dock-content'>
        <div id='dock-arrow-container'>
          <i className='dock-arrow'></i>
        </div>
        <Clock />
      </div>
    </div>
  )
}

export default Dock