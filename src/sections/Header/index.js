import React from 'react'
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

class Header extends React.Component {
  static propTypes = {
    headerData: PropTypes.object.isRequired,
  }

  componentDidMount () {
    new WOW.WOW().init()
  }

  render () {
    const { name, apellidos } = this.props.headerData

    return (
      <Wrapper>
        <Container className='header'>
          <ParallaGradient>
            {/* <ChangeLanguage switchLanguage={lang => this.props.dispatch(switchLanguage(lang))} intl={this.props.intl} />*/}
            <Parallax offsetYMax={40} offsetYMin={0} slowerScrollRate tag='figure'>
              <div className='homeContainer'>
                <div className='home_text'>
                  <Title variant='white' className='wow rubberBand title'>
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
}

export default Header
