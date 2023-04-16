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
  },
  border: {
    grey: 'rgba(224, 224, 224, 1)',
  },
  breakPoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1280px',
  },
  hover: {
    transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.12)',
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
