import React from 'react';
import { storiesOf } from '@storybook/react';
import Subheader from 'sections/Subheader';

const SubheaderData = {
    title: 'title',
    text: 'Text',
}

storiesOf('Subheader', module)
  .add('Component', () =>
    <Subheader subheaderData={SubheaderData} />
  )
