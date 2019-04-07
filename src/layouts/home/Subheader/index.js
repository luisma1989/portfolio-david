import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { H1, Body } from 'components/Fonts'
import Container from './styles'
import image from './assets/david.png'
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Subheader = ({
  subheaderData: {
    title,
    text,
  }
}) => {
  return (
    <Container className='subheader'>
      <div className='container'>
        <Desktop>
          <Parallax
            offsetYMax={170}
            offsetYMin={0}
            slowerScrollRate
            tag='figure'
          >
            <div className='testimony'>
              <H1>{title}</H1>
              <Body>{text}</Body>
            </div>
          </Parallax>
          <Parallax
            offsetYMax={40}
            offsetYMin={0}
            slowerScrollRate
            tag='figure'
          >
            <div className='image-subheader'>
              <img src={image} alt='David' />
            </div>
          </Parallax>
        </Desktop>
        <Mobile>
          <div className='testimony'>
            <H1>{title}</H1>
            <Body>{text}</Body>
          </div>
          <div className='image-subheader'>
            <img src={image} alt='David' />
          </div>
        </Mobile>
      </div>
    </Container>
  )
}

export default Subheader
