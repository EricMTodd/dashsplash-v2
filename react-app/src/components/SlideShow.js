const SlideShow = () => {
  const importImages = (r) => {
    let images = {}
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  
  const images = importImages(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/))
  let compiledImages = []
  for (let i in images) {
    compiledImages.push(images[i])
  }

  let currentImage
  let nextImage
  const initializeSlideShow = (compiledImages) => {
    currentImage = Math.floor(Math.random() * compiledImages.length)
    nextImage = Math.floor(Math.random() * compiledImages.length)
    if (nextImage === currentImage) {
      if (currentImage === compiledImages.length - 1) {
        nextImage = 0
      } else {
        nextImage = currentImage + 1
      }
    }
  }

  initializeSlideShow(compiledImages)

  return(
    <div id='slide-show-container'>
      <img src={compiledImages[currentImage]} alt='current-image' id='current-image' />
      <img src={compiledImages[nextImage]} alt='next-image' id='next-image' />
    </div>
  )
}

export default SlideShow