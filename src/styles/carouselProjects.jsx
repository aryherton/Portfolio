import styled from 'styled-components';

export const CarouselWrapper = styled.section`
  width: 100%;
  height: 650px;
  background-color: #EBE2D5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  box-shadow: 0px -4px 15px 1px #442431;

  // @media (max-width: 768px) {}
  div, h1, h3, img, span, a {
    background-color: transparent;
  }
  #container {
    align-items: center;
    box-shadow: 1px 1px 15px 1px #100107;
    display: flex;
    height: 500px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    width: 50%;
    position: relative;
    
    #itemCarousel {
      align-items: center;
      display: flex;
      flex: none;
      flex-direction: column;
      height: 100%;
      padding: 10px;
      background-color: transparent;
      border: 3px solid #2D2520;
      width: 100%;
      position: relative;
      color: #e6e1dd;
      
      #image {
        width: 100%;
        height: 100%;
        img {
          box-shadow: 0px 0px 10px #000000;
          border-radius: 5px;
          width: 100%;
          height: 100%;
          // object-fit: cover;
        }
      }
      
      #info {
        bottom: 5%;
        width: 100%;
        height: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        background-color: rgba(0,0,0,0.7);
        box-shadow: 0px 2px 30px #000000;
        color: #f5e61d;
        h1 {
          font-size: 1.3em;
        }
        #describes {
          height: 30%;
          #textDescribe {
            font-size: 1em;
            font-weight: bold;
          }

          span#tecnologias {
          font-size: 12px;
          text-align: center;
          position: absolute;
          bottom: 10px;
          right: 30px;
          color: #08ec6f;
          h3 {
            font-size: 12px;
          }
          img {
            margin-left: 5px;
          }
        }
        }
        a {
        text-decoration: none;
        color: #08ec6f;
        font-size: 1rem;
        }
      }
    }
  }

  #buttons-chevron {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 70%;
    background-color: transparent;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      img {
        background-color: transparent;
      }
    }
    button:first-child {
      transform: rotate(180deg);
    }
  }
`;