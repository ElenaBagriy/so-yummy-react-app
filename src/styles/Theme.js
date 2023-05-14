import { useSelector } from 'react-redux';
import { selectThemeIsLight } from 'redux/theme/themeSelectors';
import { ThemeProvider } from 'styled-components';

const setTheme = (isLight) => {

  return {
    colors: {
      background: `${isLight ? '#fafafa' : '#1E1F28'}`,
      backgroundSecondary: `${isLight ? '#fafafa' : '#2A2C36'}`,
      card: `${isLight ? '#ffffff' : '#2A2C36'}`,
      footer: `${isLight ? '#22252A' : '#8BAA36'}`,
      burger: `${isLight ? '#EBF3D4' : '#1E1F28'}`,
      accent: `${isLight ? '#8BAA36' : '#22252A'}`,
      checkBox: `${isLight ? 'rgba(126, 126, 126, 0.5)' : 'rgba(250, 250, 250, 0.5)'}`,
      ingredients: `${isLight ? '#EBF3D4' : '#2A2C36'}`,
      white: '#ffffff',
      bgMain: '#fafafa',
      grey: '#D9D9D9',
      lightGreen: '#EBF3D4',
      green: '#8BAA36',
      black: '#22252A',
      error: '#E74A3B',
    },

    button: {
      text: `${isLight ? '#fafafa' : '#8BAA36'}`, 
      accent: `${isLight ? '#22252A' : '#8BAA36'}`,
      textToDark: `${isLight ? '#fafafa' : '#22252A'}`,
      delete: `${isLight ? '#EBF3D4' : '#1E1F28'}`,
      background: `${isLight ? '#8BAA36' : '#1E1F28'}`,
    },

    follow: {
      main: `${isLight ? '#8BAA36' : '#FAFAFA'}`, 
      bgMain: `${isLight ? '#8BAA36' : 'none'}`, 
      hover: `${isLight ? '#FAFAFA' : '#8BAA36'}`, 
      hoverFooter: `${isLight ? '#fafafa' : '#22252A'}`,
    },

    list: {
      background: `${isLight ? '#ffffff' : '#8BAA36'}`,
      scroll: `${isLight ? '#E7E5E5' : '#1E1F28'}`,
      option: `${isLight ? 'rgba(0, 0, 0, 0.5)' : 'rgba(250, 250, 250, 0.5)'}`,
      selected: `${isLight ? 'white' : 'transparent'}`, 
      selectedText: `${isLight ? '#8BAA36' : '#FAFAFA'}`, 
      focus: `${isLight ? '#EBF3D4' : 'transparent'}`, 
    },

    pagination: {
      selected: `${isLight ? '#EBF3D4' : '#8BAA36'}`,
      shadow: `${isLight ? 'rgba(135, 135, 135, 0.2)' : 'rgba(31, 30, 30, 0.2)'}`,
      text: `${isLight ? '#656565' : 'rgba(255, 255, 255, 0.6)'}`, 
      arrow: `${isLight ? 'rgba(169, 169, 169, 0.73)' : 'rgba(255, 255, 255, 0.6)'}`, 
    },

    text: {
      hero: `${isLight ? '#22252A' : '#fafafa'}`,
      heroParagraph: `${isLight ? '#22262A' : '#fafafa'}`,
      header: `${isLight ? '#23262A' : '#fafafa'}`,
      main: `${isLight ? '#3E4462' : '#fafafa'}`,
      black: `${isLight ? '#000000' : '#fafafa'}`,
      grey: `${isLight ? '#BDBDBD' : 'rgba(250, 250, 250, 0.6)'}`,
      card: `${isLight ? '#23262A' : 'rgba(250, 250, 250, 0.6)'}`,
      popular: `${isLight ? '#7E7E7E' : 'rgba(250, 250, 250, 0.6)'}`,
      preparation: `${isLight ? 'rgba(0, 0, 0, 0.8)' : '#fafafa'}`,
      title: `${isLight ? '#001833' : '#fafafa'}`,
      paginationText: `${isLight ? '#656565' : 'rgba(255, 255, 255, 0.6)'}`,
      dark: '#23262A', 
      favorite: '#23262A',
      primary: '#3E4462',
      accent: '#8BAA36',
      white: '#fafafa'
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
      grey: `${isLight ? '#E0E0E0' : "rgba(250, 250, 250, 0.3)"}`,
      light: `${isLight ? 'rgba(51, 51, 51, 0.3)' : "#fafafa"}`,
      recipe: '1px solid rgb(112, 112, 112, 0.17)',
      recipeHover: `${isLight ? 'none' : "1px solid rgb(112, 112, 112, 0.17)"}`,
      modal: `${isLight ? 'none' : "1px solid #8BAA36"}`,
    },

    counter: `${isLight ? '#333333' : "#fafafa"}`,

    placeholder: {
      main: `${isLight ? 'rgba(0, 0, 0, 0.5)' : "#fafafa"}`,
      blured: `${isLight ? 'rgba(0, 0, 0, 0.5)' : "rgba(250, 250, 250, 0.6)"}`,
    },

    input: {
      background: `${isLight ? '#f5f5f5' : "#2A2C36"}`,
      line: `${isLight ? '#000000' : "rgba(250, 250, 250, 0.5)"}`,
      text: `${isLight ? '#23262A' : "#fafafa"}`,
      border: `${isLight ? 'none' : "1px solid rgba(250, 250, 250, 0.2)"}`,
      active: `${isLight ? '#8BAA36' : '#FAFAFA'}`, 
      white: `${isLight ? '#FFFFFF' : 'transparent'}`, 
      normal: `${isLight ? '#F0F0F0': "rgba(250, 250, 250, 0.5)"}`,
      focus: `${isLight ? 'rgba(35, 38, 42, 0.2)' : 'rgba(250, 250, 250, 0.5'}`,
      buttonBlack: `${isLight ? '#22252A' : '#8BAA36'}`,
      buttonGreen: '#8BAA36',
    },

    select: {
      grey: `${isLight ? 'rgba(217, 217, 217, 0.16)' : 'transparent'}`,
      greyHover: 'rgba(217, 217, 217, 0.3)',
      color: `${isLight ? 'rgba(0, 0, 0, 0.5)' : 'rgba(250, 250, 250, 0.5)'}`,
      list:`${isLight ? '#FAFAFA' : '#8BAA36'}`,
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
      desktop: "@media screen and (min-width:1279.98px)",
    },
  }
};


export const Theme = ({ children }) => {
  const isLightTheme = useSelector(selectThemeIsLight);

  return (
    <ThemeProvider theme={setTheme(isLightTheme)}>
      {children}
    </ThemeProvider>
  );
};
