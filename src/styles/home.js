import styled from 'styled-components';

export const HomeWrapper = styled.div`
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
    background-color: ${props => props.theme.colors.tertiary};

    ul {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 40%;
      display: flex;
      background-color: transparent;

      li {
        font-family: 'Playfair Display SC', serif;
        color: ${props => props.theme.colors.quaternary};
        font-weight: bold;
        background-color: transparent;
        list-style: none;
        width: 100%;
      }
    }
  }

  main {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.tertiary};

    section {
      background-color: transparent;
      display: flex;
    }
  }
`;