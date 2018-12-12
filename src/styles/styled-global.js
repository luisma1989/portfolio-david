import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';

const StyledGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${({ theme }) => theme.baseFont};
  }

  body {
    margin: 0pt;
    color: ${({ theme }) => theme.colors.grayColor};
    font-family: CerebriSans-Light, sans-serif;
    background-color: #fbfafa;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: ${rem('18px')};
    }
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1500px;
    background-color: #fff;
    left: 0;
    z-index: 1;
  }

  p {
    line-height: ${rem('24px')};
  }

  a {
    color: ${({ theme }) => theme.colors.blueColor};
  }

  // Delete the yellow color of inputs
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.whiteColor} inset;
  }
`;

export default StyledGlobal;
