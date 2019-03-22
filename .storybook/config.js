import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import styledTheme from 'styles/styled-theme'
import { ParallaxProvider } from 'react-scroll-parallax'

function loadStories() {
  require('../stories/Fonts')
  require('../stories/Header')
  require('../stories/Subheader')
  require('../stories/Countries')
  require('../stories/Social')
  require('../stories/Experience')
  require('../stories/About')
  require('../stories/Gallery')
}

addDecorator((story) => (
  <ParallaxProvider>
    <ThemeProvider theme={styledTheme}>
      {story()}
    </ThemeProvider>
  </ParallaxProvider>
))

configure(loadStories, module)
