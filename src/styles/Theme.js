import { ThemeProvider } from 'styled-components';


const lightTheme = {
  colors: {
    bgMain: '#fafafa',
    grey: '#D9D9D9',
    lightGreen: '#EBF3D4',
    green: '#8BAA36',
    black: '#22252A',
    white: '#ffffff',
  },
  text: {
    hero: '#22252A',
    heroParagraph: '#23262A',
    title: '#001833',
    grey: '#BDBDBD',
    paginationText: '#656565',
    primary: '#3E4462',
    accent: '#8BAA36',
  },
  letterSpacings: {
    base: "-0.02em",
    mainHeading: "-0.005em",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  border: {
    grey: '#E0E0E0',
  },
  input: {
    normal: '#F0F0F0',
    active: 'rgba(35, 38, 42, 0.2)',
  },
  breakPoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1280px',
  },
  hover: {
    transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow:
      '1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.12)',
  },
  fontSizes: {
    xxxs: "10px", //footer-mobile-input
    xxs: "12px", //mobile-selectors
    xs: "14px", //footer
    s: "16px", //footer
    sm: "18px", //footer
    m: "24px", // mobile-header
    l: "28px", //footer, h1-tablet
    xl: "44px", //h1-desktop,
  },
    sizes: {
    mobile: "@media screen and (min-width:374.98px)",
    tablet: "@media screen and (min-width:767.98px)",
    desktop: "@media screen and (min-width:1439.98px)",
  },
};

const darkTheme = {};

export const Theme = ({ children }) => {
  const isDarkTheme = false;

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
