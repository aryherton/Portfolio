import React from "react";

import { HeaderWrapper } from "../styles";

import {
  myLogo,
  myPhoto,
  linkedinIcon,
  githubIcon,
  instaIcon
} from '../image';

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="divMainHeader">
        <div className="myImageHeader">
          <img src={ myLogo } alt="my_logo" id="myLogo" />
          <img src={ myPhoto } alt="my_photo" id="myPhoto"/>
          <div id="socialMediaHeader">
            <img src={ linkedinIcon } alt="Linkedin_Icon" />
            <img src={ githubIcon } alt="Github_Icon" />
            <img src={ instaIcon } alt="Instagram_Icon" />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}