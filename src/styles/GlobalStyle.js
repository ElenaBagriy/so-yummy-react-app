import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';


export const GlobalStyle = createGlobalStyle`
${normalize}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #fafafa;
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

.container {
  max-width: 375px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media screen and (min-width: 1280px) {
  .container {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
}

`