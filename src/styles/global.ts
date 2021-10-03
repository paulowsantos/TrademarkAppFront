import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: #f7f7f7;
  color: #333;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}
// remover arrows for input type number
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

`;
