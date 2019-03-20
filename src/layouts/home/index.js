import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { HomePageElm } from './styles'
import Header from './Header'
import Subheader from './Subheader'
import Countries from './Countries'
import Experience from './Experience'
import About from './About'
import Social from './Social'

const Home = ({ intl: { messages } }) =>
  <HomePageElm>
    <Header headerData={messages.header} />
    <Subheader subheaderData={messages.subheader} />
    <Countries countriesData={messages.countries} />
    <Social />
    <Experience experienceData={messages.experience} />
    <About aboutData={messages.about} />
  </HomePageElm>

Home.propTypes = {
  intl: PropTypes.object.isRequired
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  }
}

export default connect(mapStateToProps)(Home)
