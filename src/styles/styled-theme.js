import * as colors from 'utils/constants/colors';
import { rem } from 'polished';

const {
  primaryColor, grayColor, textColor, whiteColor, linkColor, conditionsColor,
  borderColor, lightGrayColor, errorColor, borderColorModal, titleFormColor,
} = colors;

const theme = {
  colors,
  baseFont: '16px',
  customMargin1: '10px',
  palette: {
    background: {
      paper: whiteColor,
    },
    text: {
      body: textColor,
      gray: grayColor,
      link: linkColor,
      error: errorColor,
      conditions: conditionsColor,
      titleForm: titleFormColor,
    },
    primary: {
      main: primaryColor,
      contrastColor: whiteColor,
    },
    border: {
      main: borderColor,
      modal: borderColorModal,
    },
  },
  modal: {
    backdrop: {
      backgroundColor: 'rgba(43, 99, 246, 0.67)',
    },
  },
  typography: {
    main: '\'CerebriSans-Light\', sans-serif',
    secondary: '\'CerebriSans-Regular\', sans-serif',
    bold: '\'CerebriSans-Bold\', sans-serif',
    book: '\'CerebriSans-Book\', sans-serif',
    extraBoldItalic: 'CerebriSans-ExtraBold-Italic',
    extraBold: 'CerebriSans-ExtraBold',
    heavyItalic: 'CerebriSans-Heavy-Italic',
    lightItalic: 'CerebriSans-Light-Italic',
    light: '\'CerebriSans-Light\', sans-serif',
    mediumItalic: 'CerebriSans-Medium-Italic',
    medium: '\'CerebriSans-Medium\', sans-serif',
    regular: '\'CerebriSans-Regular\', sans-serif',
    semiBoldItalic: 'CerebriSans-SemiBold-Italic',
    semiBold: 'CerebriSans-SemiBold',
  },
  // fontSize se debe borrar entero. Se deben usar las fuentes components/Fonts
  fontSize: {
    heroTitle: {
      desktop: rem('52px'),
      mobile: rem('35px'),
    },
    heroText: {
      desktop: '1.25rem', // 20px
      mobile: '0.875rem', // 14px
    },
    titleSection: {
      desktop: '2.188rem', // 35px
      mobile: '1.625rem', // 26px
    },
    title: {
      desktop: '1.5rem', // 24px
      mobile: '1.25rem', // 20px
    },
    subtitle: {
      desktop: '1.25rem', // 20px
      mobile: '1rem', // 16px
    },
    minititle: {
      desktop: '0.6875rem', // 11px
      mobile: '0.6875rem', // 11px
    },
    body: {
      desktop: '1.125rem', // 18px
      mobile: '1rem', // 16px
    },
    error: {
      desktop: '0.875rem', // 14px
      mobile: '0.875rem', // 14px
    },
  },
  // lineHeight se debe borrar entero. Se deben usar las fuentes components/Fonts
  lineHeight: {
    heroTitle: {
      desktop: '3.5rem', // 56px
      mobile: '2.188rem', // 35px
    },
    heroText: {
      desktop: '2rem', // 32px
      mobile: '1.375rem', // 22px
    },
    titleSection: {
      desktop: '3.438rem', // 35px
      mobile: '1.875rem', // 26px
    },
    title: {
      desktop: '1.75rem', // 28px
      mobile: '1.25rem', // 20px
    },
    subtitle: {
      desktop: '1.75rem', // 28px
      mobile: '1.25rem', // 20px
    },
    minititle: {
      desktop: '1.063rem', // 17px
      mobile: '1.063rem', // 17px
    },
    body: {
      desktop: '1.625rem', // 25px
      mobile: '1.5rem', // 24px
    },
  },
  // fontWeight se debe borrar entero. Se deben usar las fuentes components/Fonts
  fontWeight: {
    extraLight: 100,
    light: 200,
    regular: 300,
    semiBold: 600,
    bold: 700,
    titleSection: {
      desktop: 300,
      mobile: 300,
    },
    title: {
      desktop: 300,
      mobile: 300,
    },
    subtitle: {
      desktop: 300,
      mobile: 300,
    },
    minititle: {
      desktop: 700,
      mobile: 700,
    },
    error: {
      desktop: 400,
      mobile: 400,
    },
  },
  fontStyle: {
    error: 'italic',
  },
  button: {
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.29px',
    borderRadius: '1.875rem',
    rounded: {
      borderRadius: '1.875rem',
    },
    inactive: {
      backgroundColor: lightGrayColor,
    },
  },
  containerWidth: '75rem',
  containerMaxWidth: '90%',
  spacing: {
    unit: 0.625,
  },
  breakpoints: {
    sm: '600px',
    tablet: '960px',
    desktop: '960px',
  },
};

export default theme;
