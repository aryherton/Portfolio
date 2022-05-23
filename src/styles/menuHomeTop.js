import style from 'styled-components';

export const MenuHomeTop = style.div`
    position: fixed;
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
`;