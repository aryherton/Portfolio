import React from 'react';

import { FooterWrapper } from '../styles';
import { instaFooter, gitHub32, linkedin32 } from '../image';

import { FcAddressBook } from 'react-icons/fc';
import { FcCallback } from 'react-icons/fc';
import { reactIcon,styledComp } from '../image';

export default function Footer() {
  return (
    <FooterWrapper>
      <div id="footerInfo">
        <div id="footerContact">
          <h3>Contato</h3>
          <ul>
            <li>
              <FcAddressBook />
                &nbsp;&nbsp;&nbsp;&nbsp;aryhertonbarbosa@gmail.com
            </li>
            <li>
              <FcCallback />
                &nbsp;&nbsp;&nbsp;&nbsp;+55 (86) 9 9855-8957
            </li>
          </ul>
        </div>
        <div id="footerSocialMedia">
          <h3>Redes Sociais</h3>
          <ul>
            <li><img src={ linkedin32 } alt="icon-linkedin" /></li>
            <li><img src={ gitHub32 } alt="icon-github" /></li>
            <li><img src={ instaFooter } alt="icon-instagram" /></li>
          </ul>
        </div>
        <div id="footerTecnologias">
          <h3>Tecnologias</h3>
          <ul>
            <li>
              <img src={ reactIcon } alt="icon-react" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              ReactJs
            </li>
            <li>
              <img id="iconStyledComp" src={ styledComp } alt="icon-styled-components" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Style-Components
            </li>
          </ul>
        </div>
      </div>
      <div id="footerCopyright">&copy; 2022 Todos Os Direitos Reservados</div>
    </FooterWrapper>
  )
}