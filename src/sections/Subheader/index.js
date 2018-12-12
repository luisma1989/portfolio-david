import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { H1, Body } from 'components/Fonts'

import './subheader.css'
import image from './assets/david.png'

const Subheader = ({ subheaderData }) => {
  return (
    <article className='subheader'>
      <div className='container'>
        <Parallax offsetYMax={170} offsetYMin={10} slowerScrollRate tag='figure'>
          <div className='testimony'>
            <H1>{subheaderData.title}</H1>
            <Body>{subheaderData.text}</Body>
          </div>
        </Parallax>
        <Parallax offsetYMax={40} offsetYMin={1} slowerScrollRate tag='figure'>
          <div className='image-subheader'>
            <img src={image} alt='' />
          </div>
        </Parallax>
      </div>
    </article>
  )
}

export default Subheader
