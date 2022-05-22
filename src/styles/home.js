import style from 'styled-components';

export const HomeWrapper = style.div`
  position: relative;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 98vh;
  width: 99vw;
  background-color: ${props => props.theme.colors.primary};

  div#menuSuper {
    position: relative;
    width: 100%;
    height: 4%;
    background-color: gray;

    ul {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 30%;
      display: flex;

      li {
        color: white;
        background-color: gray;
        list-style: none;
        width: 100%;
      }
    }
  }
`;