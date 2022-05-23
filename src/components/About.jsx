import React from 'react';

import { AboutWrapper } from '../styles';

export const textPre = String.raw`
   Sou desenvolvedor front-end, apaixonado
por tecnologia e por criar sistemas que
possam impactar vidas. Atualmente adquerindo
conhecimento em back-end, na escola de
programação Trybe.

`;

export default function About() {
  return (
    <AboutWrapper>
      <h1>Olá, sou Ary Barbosa.</h1>
      <blockquote>
        <pre>
          { textPre }
        </pre>
      </blockquote>
    </AboutWrapper>
  );
}