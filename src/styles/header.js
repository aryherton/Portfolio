import style from 'styled-components';

export const HeaderWrapper = style.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50%;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};

  div.divMainHeader {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.primary};
  }

  div.myImageHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.secondary};

    img {
      position: absolute;
      top: 29%;
      border-radius: 50%;
      border: 3px solid ${props => props.theme.colors.secondary};
      height: 250px;
      width: 250px;
      object-fit: cover;
    }
  }
`;