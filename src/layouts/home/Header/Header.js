import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import WOW from 'wowjs'
import { Parallax } from 'react-scroll-parallax'
import { H4 } from 'components/Fonts'
import {
  Container,
  ParallaGradient,
  Wrapper,
  Title,
} from './styles'

const Header = ({ header, getHeaderData, intl }) => {
  const getHeader = async () => await getHeaderData()
  const name = header.name || intl.messages.header.name
  const apellidos = header.apellidos || intl.messages.header.apellidos

  useEffect(() => {
    getHeader()
    new WOW.WOW().init()
  }, [])

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
  header: PropTypes.object.isRequired,
}

export default Header
