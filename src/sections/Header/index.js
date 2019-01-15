import React from 'react'
import PropTypes from 'prop-types'
import WOW from 'wowjs'
import { connect } from 'react-redux'
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
    intl: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount () {
    new WOW.WOW().init();
  }

  render () {
    const { headerData } = this.props

    return (
      <Wrapper>
        <Container className='header'>
          <ParallaGradient>
            {/* <ChangeLanguage switchLanguage={lang => this.props.dispatch(switchLanguage(lang))} intl={this.props.intl} />*/}
            <Parallax offsetYMax={40} offsetYMin={1} slowerScrollRate tag='figure'>
              <div className='homeContainer'>
                <div className='home_text wow bounceIn'>
                  <Title variant='white' className='wow rubberBand title'>
                    {headerData.name} {headerData.apellidos}
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

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}


export default connect(mapStateToProps)(Header)
