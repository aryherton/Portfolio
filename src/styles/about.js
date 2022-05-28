import styled from 'styled-components';

export const AboutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  background-color: ${props => props.theme.colors.tertiary};
  

  #textIntro {
    z-index: 3;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 5%;
    bottom: 10%;
    width: 500px;
    height: 100%;
    border-radius: 20px;
    border: 3px solid #4A121D;
    background-color: #EBE2D5;

    h1 {
      font-size: 2.2em;
      font-family: ${props => props.theme.font.quaternary}, cursive;
      margin-bottom: 8px;
      color: ${props => props.theme.colors.section};
    }

    h2 {
      align-self: start;
      margin-left: 10px;
      font-size: 1.2em;
      color: #4A121D;
      font-family: ${props => props.theme.font.quaternary}, cursive;
    }
  
    pre, blockquote {
      font-family: ${props => props.theme.font.tertiary}, sans-serif;
      font-size: 1em;
      color: #4A121D;
    }

    h1, h2, pre, blockquote {
      background-color: transparent;
    }
  }

`;