import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  margin: 140px 0px 0px 50px;

  #divMainSkills {
    background-color: #EBE2D5;
    border-radius: 20px;
    border: 3px solid #4A121D;
    height: 390px;
    left: 10%;
    position: relative;
    width: 500px;

    h1 {
      background-color: ${props => props.theme.colors.quaternary};
      border-radius: 10px;
      border: none;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.55);
      color: white;
      margin-top: 10px;
      padding-top: 5px;
      text-align: center;
    }

    #divSkills {
        background-color: transparent;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
      }

      ul, li {
        background-color: transparent;
        color: #4A121D;
        font-family: ${props => props.theme.font.quaternary}, cursive;
        list-style: none;
        img {
          background-color: transparent;
          height: 20px;
          margin-right: 10px;
          width: 20px;
        }
    }
  }
`;