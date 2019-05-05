import React from 'react'
import PropTypes from 'prop-types'
import { HomePageElm } from './styles'
import Header from './Header'
import Subheader from './Subheader'
import Countries from './Countries'
import Experience from './Experience'
// import About from './About'
import Social from './Social'

const Home = ({
  intl: { messages },
}) => {
  return (
    <HomePageElm>
      <Header />
      <Subheader />
      <Countries countriesData={messages.countries} />
      <Social />
      <Experience experienceData={messages.experience} />
      {/*
      <About aboutData={messages.about} /> */}
    </HomePageElm>
  )
}
Home.propTypes = {
  intl: PropTypes.object.isRequired,
}

export default Home
