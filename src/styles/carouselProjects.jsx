import styled from 'styled-components';

export const CarouselWrapper = styled.section`
  width: 100%;
  height: 550px;
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
    boder-radius: 16px;
    display: flex;
    height: 95%;
    overflow-x: auto;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        a {
          text-decoration: none;
          color: #f9f03a;
          font-size: 1rem;
        }
        h1 {
          margin-top: 10px;
          font-size: 15px;
        }
        span {
          font-size: 12px;
          display: block;
          text-align: center;
          padding: 5px;
          border-radius: 10px;
          h3 {
            font-size: 12px;
          }
          img {
            margin-left: 5px;
          }
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