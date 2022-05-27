import React from 'react';

import { AboutWrapper } from '../styles';

export const textPre = String.raw`
Fique à vontade par dar uma olhadinha😉. Aqui você encontra
um pouco da minha história, projetos e caso precise de alguma
informação a mais, no canto superior direito você encontra minhas
redes sociais e whatsApp... aguarda seu contato.
`;

export default function About() {
  return (
    <AboutWrapper>
      <div id="textIntro">
        <h1>Olá, sou Ary Barbosa.</h1>
        <h2>Seja bem-vindo ao meu portfólio.</h2>
        <blockquote>
          <pre>
            { textPre }
          </pre>
        </blockquote>
      </div>
    </AboutWrapper>
  );
}