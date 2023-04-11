import { useState } from "react";
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
    const [theme, setTheme] = useState('light');
    const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };
    
    return <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>{children}</ThemeProvider>
} 