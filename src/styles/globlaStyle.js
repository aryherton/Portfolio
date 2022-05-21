import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
`;

export const theme = {
  colors: {
    primary: '#E5E9F0',
    secondary: '#FFFEFF',
    tertiary: '#34363A',
    quaternary: '#AF8A6E',
  }
}