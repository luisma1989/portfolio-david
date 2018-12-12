import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import WOW from 'wowjs'
import { connect } from 'react-redux'
// import ChangeLanguage from '../../components/ChangeLanguage'
import { Parallax } from 'react-scroll-parallax'
// import { switchLanguage } from '../../Intl/IntlActions'

import './Header.css'

class Header extends React.Component {
  static propTypes = {
    headerData: PropTypes.object.isRequired,
    intl: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount () {
    new WOW.WOW().init();

    const widnowHeight = $(window).height()
    const containerHeight = $('.homeContainer').height()
    const padTop = widnowHeight - containerHeight
    $('.homeContainer').css({
      'padding-top': Math.round(padTop / 2) + 'px',
      'padding-bottom': Math.round(padTop / 2) + 'px'
    })
  }

  render () {
    const { headerData } = this.props

    return (
      <section className='header'>
        <div className='parallax-gradient'>
          {/* <ChangeLanguage switchLanguage={lang => this.props.dispatch(switchLanguage(lang))} intl={this.props.intl} />*/}
          <Parallax className='custom-class' offsetYMax={40} offsetYMin={1} slowerScrollRate tag='figure'>
            <div className='homeContainer'>
              <div className='home_text wow bounceIn'>
                <h1 className='wow rubberBand title'>
                  <span>{headerData.name}</span>
                  <br />
                  {headerData.apellidos}
                </h1>
              </div>
            </div>
          </Parallax>
        </div>
      </section>
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
