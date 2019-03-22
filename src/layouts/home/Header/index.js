import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import WOW from 'wowjs'
import { Parallax } from 'react-scroll-parallax'
import { H4 } from 'components/Fonts'
// import ChangeLanguage from '../../components/ChangeLanguage'
// import { switchLanguage } from '../../Intl/IntlActions'
import {
  Container,
  ParallaGradient,
  Wrapper,
  Title,
} from './styles'

const Header = ({ headerData }) => {
  const { name, apellidos } = headerData

  useEffect(() => { new WOW.WOW().init() })

  return (
    <Wrapper>
      <Container className='header'>
        <ParallaGradient>
          {/* <ChangeLanguage switchLanguage={lang => this.props.dispatch(switchLanguage(lang))} intl={this.props.intl} />*/}
          <Parallax offsetYMax={40} offsetYMin={0} slowerScrollRate tag='figure'>
            <div className='homeContainer'>
              <div className='home_text'>
                <Title variant='white' className='title'>
                  {name} {apellidos}
                </Title>
              </div>
            </div>
          </Parallax>
        </ParallaGradient>
      </Container>
      <H4>Chef ejecutivo</H4>
    </Wrapper>
  )
}

Header.propTypes = {
  headerData: PropTypes.object.isRequired,
}

export default Header
