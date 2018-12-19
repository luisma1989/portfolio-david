import React from 'react'
import { H3, Body } from 'components/Fonts'
import './countries.css'
import background from './assets/countries-bg.jpg'

const Countries = ({ countriesData }) => {
  return (
    <section className='countries'>
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
          <H3 variant='yellow'>{countriesData.es.title}</H3>
          <Body variant='white'>{countriesData.es.text}</Body>
        </article>
        <article>
          <H3 variant='yellow'>{countriesData.ru.title}</H3>
          <Body variant='white'>{countriesData.ru.text}</Body>
        </article>
      </div>
    </section>
  )
}

export default Countries
