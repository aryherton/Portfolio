import style from 'styled-components';

export const HeaderWrapper = style.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};

  div.divMainHeader {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: transparent;

    div.myImageHeader {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 70%;
      width: 100%;
      background-color: ${props => props.theme.colors.primary};
      border-bottom: 4px solid ${props => props.theme.colors.secondary};
  
      #myLogo {
        min-width: 70%;
        height: 80px;
        -webkit-transform: skew(-30deg); /* Chrome, Opera */
        -ms-transform: skew(-30deg); /* IE */
            transform: skew(-30deg); /* Padrão */
        background-color: transparent;

        img {
          background-color: transparent;
        }
      }
  
      #myPhoto {
        z-index: 2;
        position: absolute;
        top: 30%;
        background-color: transparent;

        img {
          border: 3px solid ${props => props.theme.colors.secondary};
          background-color: transparent;
          border-radius: 50%;
          height: 220px;
          width: 200px;
          object-fit: cover;
        }
      }
  
      div#socialMediaHeader {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 110px;
        width: 30px;
        bottom: 5%;
        border-radius: 5%;
        border: 0.5px solid gray;
        background-color: ${props => props.theme.colors.secondary};

        img {
          height: 24px;
          width: 24px;
        }
      }
    }
  }
`;