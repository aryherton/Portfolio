import style from 'styled-components';

export const AboutWrapper = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  width: 45%;
  background-color: transparent;

  h1, pre, blockquote {
    width: 70%;
    height: 100%;
    background-color: transparent;
  }

`;