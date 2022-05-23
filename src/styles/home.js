import style from 'styled-components';

export const HomeWrapper = style.div`
  position: relative;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  width: 98%;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.55);

  div#menuSuper {
    position: relative;
    width: 100%;
    height: 30px;
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

  main {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 400px;
    background-color: transparent;
  }
`;