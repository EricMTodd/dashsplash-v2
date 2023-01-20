
const importImages = (r) => {
  let images = {}
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importImages(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/))

const SlideShow = () => {
  return(
    <div id='slide-show-container'>
      <img src={images['3.jpg']} alt='alpha' />
    </div>
  )
}

export default SlideShow