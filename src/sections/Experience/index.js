import React from 'react'
import PropTypes from 'prop-types'
import ItemListContent from './components/ItemListContent'
import {
  Wrapper,
  Container,
  Title,
  Subtitle,
  List,
} from './styles.js'

const Experience = ({ experienceData }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{experienceData.title}</Title>
        <Subtitle dangerouslySetInnerHTML={{ __html: experienceData.subtitle }} />
        <List>
          { experienceData.jobs.map((job) =>
            <ItemListContent job={job} key={job.id} />
          )}
        </List>
      </Container>
    </Wrapper>
  )
}

Experience.propTypes = {
  experienceData: PropTypes.object.isRequired,
}

export default Experience
