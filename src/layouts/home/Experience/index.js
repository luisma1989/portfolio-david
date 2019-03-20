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
import { Link } from 'react-router-dom';

const Experience = ({ experienceData }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{experienceData.title}</Title>
        <Subtitle dangerouslySetInnerHTML={{ __html: experienceData.subtitle }} />
        <List>
          { experienceData.jobs.map((job) =>
            <Link to={job.link} key={job.id}>
              <ItemListContent job={job} />
            </Link>
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
