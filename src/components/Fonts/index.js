import styled from 'styled-components';

function variantColor({ theme, variant = 'black' }) {
  return theme.colors[`${variant}`];
}

export const H1 = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 70px;
  line-height: 60px;
  margin-top: 0;
  text-rendering: optimizeLegibility;
  color: ${variantColor};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 55px;
  }
`;

export const H2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  line-height: 32px;
  font-size: 50px;
  line-height: 36px;
  margin-top: 0;
  text-rendering: optimizeLegibility;
  color: ${variantColor};
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const H3 = styled.h3`
  font-family: 'Raleway', sans-serif;
  line-height: 32px;
  font-size: 35px;
  margin-top: 0;
  text-rendering: optimizeLegibility;
  color: ${variantColor};
  font-weight: 300;
  line-height: 50px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const H4 = styled.h4`
  font-family: 'Raleway', sans-serif;
  line-height: 32px;
  font-size: 28px;
  margin-top: 0;
  text-rendering: optimizeLegibility;
  color: ${variantColor};
  font-weight: 400;
`;

export const H5 = styled.h5`
  font-family: 'Raleway', sans-serif;
  line-height: 32px;
  font-size: 18px;
  margin-top: 0;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  color: ${variantColor};
  font-weight: bold;
`;

export const Body = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  line-height: 25px;
  margin-top: 0;
  text-rendering: optimizeLegibility;
  color: ${variantColor};

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 23px;
  }
`;

export const Caps = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  line-height: 22px;
  margin-top: 0;
  text-rendering: optimizeLegibility;
  color: ${variantColor};

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 23px;
  }
`;
