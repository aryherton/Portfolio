import style from 'styled-components';

export const HeaderWrapper = style.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 40%;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};

  div.divMainHeader {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.primary};
  }

  div.myImageHeader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.secondary};

    img#myLogo {
      width: 200px;
      height: 80px;
      position: absolute;
      left: 15%;
      top: 40%;
      background-color: ${props => props.theme.colors.primary};
    }

    img#myPhoto {
      position: absolute;
      top: 45%;
      border-radius: 50%;
      border: 3px solid ${props => props.theme.colors.secondary};
      height: 200px;
      width: 200px;
      object-fit: cover;
    }

    div#socialMediaHeader {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      position: absolute;
      right: 2%;
      height: 110px;
      width: 25px;
      bottom: 5%;
      background-color: ${props => props.theme.colors.secondary};
    }
  }
`;