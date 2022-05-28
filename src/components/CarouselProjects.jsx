import React, { useRef } from 'react';

import { CarouselWrapper } from '../styles';
import { arrImg } from '../help/dataCarousel.js';
import { chevronLeft } from '../image';

export default function Carousel() {
  const carouselRef = useRef(null);

  const buttonClickScrollRight = (e) => {
    e.preventDefault();
    console.log('clicou');
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  }

  const buttonClickScrollLeft = (e) => {
    e.preventDefault();
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  }

  return(
    <CarouselWrapper>
      <div id="container" ref={ carouselRef }>
        {
          arrImg.map((item, index) => {
            const { img, alt, title, tecnology, describe, link } = item;
            return (
              <div key={ index } id="itemCarousel">
              <div id="image">
                <img src={ img } alt={ alt } />
              </div>
              <div id="info">
                <h1>{ title }</h1>
                <div id="describes">
                  <span id="textDescribe">{ describe }</span>
                  <span id="tecnologias">
                    <h3>Desenvolvido com:</h3>
                    { tecnology.map((item, index) => (
                      <img key={ index } src={ item } alt="icon" />
                    )) }
                  </span>
                </div>
                <span>
                  <a href={ link }>{ link }</a>
                </span>
              </div>
            </div>
            );
          })
        }
      </div>
      <div id="buttons-chevron">
        <button onClick={ buttonClickScrollRight }>
        <img src={ chevronLeft } alt="scroll-right" />
        </button>
        <button onClick={ buttonClickScrollLeft }>
        <img src={ chevronLeft } alt="scroll-left" />
        </button>
      </div>
    </CarouselWrapper>
  );
}