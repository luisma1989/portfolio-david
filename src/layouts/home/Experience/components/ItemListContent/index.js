import React from 'react'
import { Body, Caps } from 'components/Fonts'
import {
  ItemList,
  Info,
  TitleSection,
  SubtitleSection,
} from './styles.js'

const images = require.context('../../assets/', true)
const Image = ({ src, title }) => <img src={images(src)} alt={title} />
const ItemListContent = ({ job }) => {
  return (
    <ItemList className={`${job.class}`}>
      { job.image && <Image src={job.image} title={job.title} /> }
      <Info>
        <Caps className='timeline__id' variant='yellow'>{job.time}</Caps>
        <div>
          <TitleSection variant='green'>{job.title}</TitleSection>
          <SubtitleSection variant='rose'>{job.subtitle}</SubtitleSection>
          <Body>{job.text}</Body>
        </div>
      </Info>
    </ItemList>
  )
}

export default ItemListContent
