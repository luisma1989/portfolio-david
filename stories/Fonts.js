import React from 'react';
import { storiesOf } from '@storybook/react';
import { H1, H2, H3, H4, H5, Body } from 'components/Fonts';

const colors = {
  colors: {
    variant: 'black',
  }
}

storiesOf('Fonts', module)
  .add('Title H1', () =>
      <H1 theme={colors}>Some text in H1</H1>
  )
  .add('Title H2', () =>
    <H2 theme={colors}>Some text in H2</H2>
  )
  .add('Title H3', () =>
    <H3 theme={colors}>Some text in H3</H3>
  )
  .add('Title H4', () =>
    <H4 theme={colors}>Some text in H4</H4>
  )
  .add('Title H5', () =>
    <H5 theme={colors}>Some text in H5</H5>
  )
  .add('Body parr', () =>
    <Body theme={colors}>Some text in Body</Body>
  )
