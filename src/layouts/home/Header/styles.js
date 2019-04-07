import styled from 'styled-components'
import bg from './assets/bg.jpg'
import { black, white } from 'utils/constants/colors'
import { H1 } from 'components/Fonts'

export const Wrapper = styled.section`
  overflow: hidden;
  max-width: 1500px;
  margin: 0 auto;
  height: 100vh;
  background-color: ${black};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h4 {
    position: absolute;
    bottom: 20px;
    right: 40px;
    color: ${white};
  }
`;

export const Container = styled.div`
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 60rem;
  height: 60rem;
  border-radius: 50%;
  background-position: center;

  @media (max-width: 860px) {
    width: 50rem;
    height: 50rem;
  }

  @media (max-width: 640px) {
    width: 35rem;
    height: 35rem;
  }

  .parallax-inner {
    transform: initial!important;
  }
`;

export const ParallaGradient = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(H1)`
  font-family: 'Righteous', sans-serif;
  text-transform: uppercase;
  font-size: 85px;
  white-space: nowrap;

  @media (max-width: 1220px) {
    font-size: 75px;
  }

  @media (max-width: 1080px) {
    font-size: 80px;
    white-space: initial;
  }

  @media (max-width: 860px) {
    font-size: 62px;
  }
`;
