import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from 'sections/Header';

const headerData = {
  headerData:{
    name: 'name',
    apellidos: 'apellidos',
  }
}

storiesOf('Header', module)
  .add('Component', () =>
    <Header headerData={headerData} />
  )
