import React from 'react'
import { Body } from 'components/Fonts'
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
    <ItemList className={`wow zoomIn ${job.class}`}>
      { job.image && <Image src={job.image} title={job.title} /> }
      <Info>
        <span className='timeline__id'>{job.time}</span>
        <div>
          <TitleSection>{job.title}</TitleSection>
          <SubtitleSection>{job.subtitle}</SubtitleSection>
          <Body>{job.text}</Body>
        </div>
      </Info>
    </ItemList>
  )
}

export default ItemListContent
