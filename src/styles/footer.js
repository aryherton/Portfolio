import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #442431;

  div, h3, ul, li {
      background-color: transparent;
    }

  #footerInfo {
    color: white;
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 90%;
    #footerContact {
      width: 200px;
    }
    #footerSocialMedia {
      width: 200px;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      h3 {
        border-bottom: 2px solid white;
        width: 100%;
      }
      ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
        width: 100%;
        li {
          img {
            background-color: transparent;
          }
        }
      }
    }
    #footerTecnologias {
      width: 200px;
    }
  }
  #footerCopyright {
      width: 100%;
      height: 10%;
      color: white;
      text-align: center;
      background-color: ${props => props.theme.colors.tertiary};
    }
`;