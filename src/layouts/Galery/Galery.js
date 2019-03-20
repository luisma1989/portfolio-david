import React, { useState } from 'react'
import Gallery from 'react-photo-gallery'
import Measure from 'react-measure'
import Lightbox from 'react-images'
import './Galery.css'
import { DetailsPageElm } from './styles'

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

const Galery = () => {
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
      <Measure whitelist={['width']}>
        {({ width }) => {
            let cols = 3
            if (width >= 480) { cols = 2 }
            if (width >= 1024) { cols = 3 }
            if (width >= 1824) { cols = 4 }
            return (
              <Gallery
                photos={PHOTO_SET}
                columns={cols}
                onClick={openLightbox}
                index
              />
            )
          }
        }
      </Measure>
    )
  }

  if (PHOTO_SET) {
    return (
      <DetailsPageElm className='galery'>
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
      </DetailsPageElm>
    )
  }
}

export default Galery
