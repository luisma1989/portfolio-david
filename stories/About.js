import React from 'react';
import { storiesOf } from '@storybook/react';
import About from 'sections/About';

const aboutData = {
  title: 'title',
  text: 'text',
  header: 'header',
}

storiesOf('About', module)
  .add('Component', () =>
    <About aboutData={aboutData} />
  )
