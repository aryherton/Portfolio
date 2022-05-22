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
`;