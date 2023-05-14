import Regular from '../fonts/Poppins-Regular.ttf';
import Medium from '../fonts/Poppins-Medium.ttf';
import SemiBold from '../fonts/Poppins-SemiBold.ttf';
import Bold from '../fonts/Poppins-Bold.ttf';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

@font-face {
    font-family: 'Poppins';
    src: url(${Regular}) format("truetype");
    font-weight: 400;
    font-display: swap;
}
@font-face {
    font-family: 'Poppins';
    src: url(${Medium}) format("truetype");
    font-weight: 500;
    font-display: swap;
}
@font-face {
    font-family: 'Poppins';
    src: url(${SemiBold}) format("truetype");
    font-weight: 600;
    font-display: swap;
}
@font-face {
    font-family: 'Poppins';
    src: url(${Bold}) format("truetype");
    font-weight: 700;
    font-display: swap;
}


body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color:${props => props.theme.colors.background}; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: 'Poppins', sans-serif;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin and padding */
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
a,
address,
code,
img,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

/* Reset list styles */
ol,
ul {
  list-style: none;
}

/* Reset anchor styles */
a {
  color: inherit;
  text-decoration: none;
}

button {
  padding: 0;
  cursor: pointer;
  font: inherit;
}

/* Make images and embedded objects responsive */
img,
embed,
object,
video {
  max-width: 100%;
  height: auto;
  display: block;
}

input,
textarea,
select {
  font: inherit;
}

/* Reset table styles */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.loader-wrapper {
 display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  height: 100vh;
   margin-left: auto;
  margin-right: auto;
}
`;
