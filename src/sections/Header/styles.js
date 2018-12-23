import styled from 'styled-components'
import { H2 } from 'components/Fonts'
import bg from './assets/bg2.jpg'

export const Container = styled.div`
  overflow: hidden;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform 5000ms;
  max-width: 1500px;
  margin: 0 auto;
  height: 100vh;

  &:hover {
    transform: scale(1.1);
  }
`;
Container.displayName = 'Container';

export const ParallaGradient = styled.div`
  height: 100%;
  background: radial-gradient(ellipse farthest-corner at center center, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.85) 100%) repeat scroll 0% 0%;
`;
ParallaGradient.displayName = 'Title';
