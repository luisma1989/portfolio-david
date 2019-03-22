import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from 'react-images'
import { GaleryContainer, GalleryStyles } from './styles'
import Arrow from 'components/Icons/Arrow'

const importAll = (imagesImported) => {
  let images = []
  imagesImported.keys().map((item, index) =>
    images.push({
      src: imagesImported(item),
      alt: `Image ${index}`,
      width: 4,
      height: 3
    })
  )
  return images
}

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const PHOTO_SET = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

  const openLightbox = ( event, { index }) => {
    event.preventDefault()
    setCurrentImage(index)
    setLightboxIsOpen(true)
  }
  const closeLightbox = () => {
    setCurrentImage(0)
    setLightboxIsOpen(false)
  }

  const renderGallery = () => {
    return (
      <GalleryStyles
        className='gallery'
        photos={PHOTO_SET}
        onClick={openLightbox}
      />
    )
  }

  if (PHOTO_SET) {
    return (
      <GaleryContainer className='galery'>
        <Link to='/'>
          <Arrow />
        </Link>
        {renderGallery()}
        <Lightbox
          images={PHOTO_SET}
          backdropClosesModal={true}
          onClose={closeLightbox}
          onClickPrev={() => setCurrentImage(currentImage - 1)}
          onClickNext={() => setCurrentImage(currentImage + 1)}
          currentImage={currentImage}
          isOpen={lightboxIsOpen}
          width={1600}
        />
      </GaleryContainer>
    )
  }
}

export default Gallery
