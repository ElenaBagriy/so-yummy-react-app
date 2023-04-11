import { ThemeProvider } from "styled-components";

const lightTheme = {
    colors: {
        bgMain: '#fafafa',
        grey: '#D9D9D9',
        lightGreen: '#EBF3D4',
        green: '#8BAA36',
        black: '#22252A',
        white: '#ffffff',
    },
    breakPoints: {
        mobile: '375px',
        tablet: '768px',
        desctop: '1280px',
    }

};


const darkTheme = {

};

export const Theme = ({ children }) => {
    const isDarkTheme = false;
    
    return <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>{children}</ThemeProvider>
} 