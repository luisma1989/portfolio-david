import React from 'react'
import { H3, Body } from 'components/Fonts'
import background from './assets/countries-bg.jpg'
import Container from './styles';

const Countries = ({ countriesData: { es, ru } }) => {
  return (
    <Container>
      <img
        src={background}
        className='wow slideInLeft'
        data-wow-duration='2s'
        alt='Countries section background'
      />
      <div
        className='wow slideInRight text-section'
        data-wow-duration='2s'
      >
        <article>
          <H3 variant='yellow'>{es.title}</H3>
          <Body variant='white'>{es.text}</Body>
        </article>
        <article>
          <H3 variant='yellow'>{ru.title}</H3>
          <Body variant='white'>{ru.text}</Body>
        </article>
      </div>
    </Container>
  )
}

export default Countries
