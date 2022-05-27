import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    background-color: white;
  }
`;

export const theme = {
  colors: {
    primary: '#E5E9F0',
    secondary: '#FFFEFF',
    tertiary: '#2D2520',
    quaternary: '#6C6157',
  },
  font: {
    primary: 'Roboto',
    secondary: 'Bebas Neue',
    tertiary: 'Open Sans',
    quaternary: 'Abril Fatface',
  }
}