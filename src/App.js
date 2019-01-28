import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import styledTheme from 'styles/styled-theme'
import StyledGlobal from 'styles/styled-global'

// import IntlWrapper from './Intl/IntlWrapper'
import { ParallaxProvider } from 'react-scroll-parallax'

import Header from './sections/Header'
import Subheader from './sections/Subheader'
import Countries from './sections/Countries'
import Experience from './sections/Experience'
import About from './sections/About'
import Social from './sections/Social'
// import Sentence from './components/Sentence'
// import LinksGalery from './components/LinksGalery'

// import SecondSentence from './components/SecondSentence'
// import Galery from './components/Galery'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = props => {
  return (
    <ThemeProvider theme={styledTheme}>
      <ParallaxProvider>
        <StyledGlobal />

        <Router>
          <Switch>
            <Route exact path='/' render={() => {
                return (
                  <div>
                    <Header headerData={props.intl.messages.header} intl={props.intl} />
                    <Subheader subheaderData={props.intl.messages.subheader} />
                    <Countries countriesData={props.intl.messages.countries} />
                    <Social />
                    <Experience experienceData={props.intl.messages.experience} />
                    <About aboutData={props.intl.messages.about} />
                  </div>
                )
              }} />
            {/* <Route path='/events' render={() => <Galery />} />
            <Route path='/plates' render={() => <About />} /> */}
          </Switch>
        </Router>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

App.propTypes = {
  intl: PropTypes.object.isRequired
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  }
}

export default connect(mapStateToProps)(App)
