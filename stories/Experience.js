import React from 'react'
import { storiesOf } from '@storybook/react'
import Experience from 'layouts/home/Experience'

const experienceData = {
  title: 'Mi experiencia',
  subtitle: 'Desde que empezé a trabajar en el mundo de la hosteleria, lo he hecho en <span>grandes hoteles y restaurantes</span> tanto en <span>España como en Rusia</span>, y puedo decir que es una de mis pasiones en la vida.',
  jobs: [
    {
      title: 'La terraza del casino (Casino Madrid)',
      subtitle: 'Ayudante',
      text: 'La Terraza del Casino, en uno de los mayores exponentes de la vanguardia gastronómica española. Una propuesta culinaria en la que se busca la originalidad, la creatividad más extrema, la transgresión y la sorpresa en un entorno, sin embargo, tremendamente clásico.',
      time: 'Actualidad',
      class: 'image-rigtht',
      id: '0',
      image: './plato1.jpeg',
    },
  ]
}

storiesOf('Experience', module)
  .add('component', () =>
    <Experience experienceData={experienceData} />
  )