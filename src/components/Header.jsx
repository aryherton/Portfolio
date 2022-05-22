import React from "react";

import { HeaderWrapper } from "../styles";

import my_img from '../image/my-not-background.png';

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="divMainHeader">
        <div className="myImageHeader">
          <img src={ my_img } alt="my_image" />
          <hr />
        </div>
      </div>
    </HeaderWrapper>
  )
}