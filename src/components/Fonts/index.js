import styled from 'styled-components';

export const H1 = styled.h1`
  font-family: 'Quicksand', sans-serif;
  line-height: 60px;
  font-size: 70px;
  margin-top: 0;
  text-rendering: optimizeLegibility;
`;

export const H2 = styled.h2`
  font-family: 'Quicksand', sans-serif;
  line-height: 32px;
  font-size: 50px;
  line-height: 36px;
  margin-top: 0;
  text-rendering: optimizeLegibility;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const H3 = styled.h3`
  font-family: 'Quicksand', sans-serif;
  line-height: 32px;
  font-size: 35px;
  margin-top: 0;
  text-rendering: optimizeLegibility;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const H4 = styled.h4`
  font-family: 'Quicksand', sans-serif;
  line-height: 32px;
  font-size: 28px;
  margin-top: 0;
  text-rendering: optimizeLegibility;
`;

export const H5 = styled.h5`
  font-family: 'Quicksand', sans-serif;
  line-height: 32px;
  font-size: 20px;
  margin-top: 0;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
`;

export const Body = styled.p`
  font-family: 'Quicksand', sans-serif;
  line-height: 32px;
  font-size: 18px;
  line-height: 25px;
  margin-top: 0;
  text-rendering: optimizeLegibility;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 23px;
  }
`;
