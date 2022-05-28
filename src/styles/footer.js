import style from 'styled-components';

export const FooterWrapper = style.footer`
  width: 100%;
  height: 200px;
  background-color: #442431;
  // box-shadow: 0px -4px 15px 1px rgba(0,0,0,0.75);

  div, h3, ul, li, img {
      background-color: transparent;
      list-style: none;
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
      width: 300px;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      h3 {
        border-bottom: 2px solid white;
        width: 100%;
        text-align: center;
        margin-top: 16px;
      }
      ul {
        margin-top: 20px;
        width: 100%;
        height: 100%;
        li {
          padding-bottom: 10px;
        }
      }
    }
    #footerSocialMedia {
      width: 300px;
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
        width: 90%;
        li {
          img {
            background-color: transparent;
          }
        }
      }
    }
    #footerTecnologias {
      width: 300px;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 13px;
      align-items: center;
      h3 {
        text-align: center;
        border-bottom: 2px solid white;
        width: 100%;
      }
      #iconStyledComp {
        width: 32px;
        height: 32px;
      }
      li {
        margin-top: 10px;
      }

    }
  }
  #footerCopyright {
      width: 100%;
      height: 10%;
      color: white;
      text-align: center;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.55);
      background-color: ${props => props.theme.colors.tertiary};
    }
`;