import React from 'react'
import PropTypes from 'prop-types'
import imgBg from './assets/lemon.jpg'
import { Caps } from 'components/Fonts'
import {
  Container,
  Header,
  Section,
  Article,
  Title,
  FirstLetter,
  SecondLetter,
} from './styles'

const About = ({ aboutData: { title, text, header } }) => (
  <Container>
    <Header>
      <Caps bold>{header}</Caps>
      <div>
        <span>
          <FirstLetter>D</FirstLetter>
        </span>
        <span>
          <SecondLetter>F</SecondLetter>
        </span>
      </div>
    </Header>
    <Section>
      <Article>
        <Title className='smalltitle'>{title}</Title>
        <p className='p4 wow zoomIn'>{text}</p>
      </Article>
      <Article>
        <img src={imgBg} alt={title} />
      </Article>
    </Section>
  </Container>
);

About.propTypes = {
  aboutData: PropTypes.object.isRequired
};

export default About;
