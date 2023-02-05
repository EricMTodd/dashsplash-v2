import { useEffect, useState } from 'react'

const SlideShow = () => {
  const [imagesList, setImagesList] = useState([])

  useEffect(() => {
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
    setImagesList(compiledImages)
    
    document.querySelector('#current-image').src = compiledImages[Math.floor(Math.random() * compiledImages.length)]
    document.querySelector('#next-image').src = compiledImages[Math.floor(Math.random() * compiledImages.length)]

  }, [])

  const cycleSlides = () => {
    document.querySelector('#current-image').style.opacity = '0'
    let timeout = setTimeout(() => {
      document.querySelector('#current-image').remove()
      document.querySelector('#next-image').id = 'current-image'
      document.querySelector('#current-image').alt = 'current-image'
      let nextImage = document.createElement('img')
      nextImage.src = imagesList[Math.floor(Math.random() * imagesList.length)]
      nextImage.id = 'next-image'
      nextImage.alt = 'next-image'
      document.querySelector('#slide-show-container').appendChild(nextImage)
    }, 1000)
    return () => clearTimeout(timeout)
  }

  useEffect(() => {
    let interval = setInterval(() => {
      cycleSlides()
    }, 60000)
    return () => clearInterval(interval)
  })

  return(
    <div id='slide-show-container'>
      <img id='current-image' alt='current-image'/>
      <img id='next-image' alt='next-image'/>
    </div>
  )
}

export default SlideShow