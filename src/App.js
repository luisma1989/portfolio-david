import React from 'react'
import { ThemeProvider } from 'styled-components'
import styledTheme from 'styles/styled-theme'
import StyledGlobal from 'styles/styled-global'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './layouts/home';
import Galery from './layouts/Galery'
import styled from 'styled-components'

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const App = () =>
  <ThemeProvider theme={styledTheme}>
    <ParallaxProvider>
      <StyledGlobal />
      <Router>
        <Route render={({ location }) => {
          return (
            <PageContainer>
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    <Route path='/events' component={Galery} />
                    {/*< path='/plates' render={() => <About />} /> */}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </PageContainer>
          )
        }} />
      </Router>
    </ParallaxProvider>
  </ThemeProvider>

export default App
