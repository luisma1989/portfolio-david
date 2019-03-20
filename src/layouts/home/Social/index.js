import React from 'react'
import {
  Container,
  Row,
} from './styles'

const icons = [
  'icon-facebook',
  'icon-instagram',
  'icon-linkedin',
  'icon-youtube'
]

const Social = () => (
  <Container>
    { icons.map((icon, index) =>
        <Row key={index}>
          <span className={`icon ${icon}`}></span>
        </Row>
      )
    }
  </Container>
)

export default Social
