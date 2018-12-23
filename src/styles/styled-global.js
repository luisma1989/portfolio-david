import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';

const StyledGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0pt;
    color: ${({ theme }) => theme.colors.black};
    font-family: CerebriSans-Light, sans-serif;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1500px;
    background-color: ${({ theme }) => theme.colors.white};
    left: 0;
    z-index: 1;
  }

  p {
    line-height: ${rem('24px')};
  }

  a {
    color: ${({ theme }) => theme.colors.blueColor};
  }

`;

export default StyledGlobal;
