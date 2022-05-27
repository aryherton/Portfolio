import React from 'react';

import { SkillsWrapper } from '../styles';
import { checkMark2 } from '../image';

export default function Skills() {
  return (
    <SkillsWrapper>
      <div id="divMainSkills">
        <h1>Habilidade em:</h1>
        <div id="divSkills">
          <ul id="firstUl">
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              HTML5
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
                CSS
              </li>
            <li>
            <img src={ checkMark2 } alt="check_mark_green" />
              Tailwind
            </li>
            <li>
            <img src={ checkMark2 } alt="check_mark_green" />
              Style-Components
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              JavaScript
            </li>
            <li>
            <img src={ checkMark2 } alt="check_mark_green" />
              Typescript
            </li>
            <li>
            <img src={ checkMark2 } alt="check_mark_green" />
              React
            </li>
            <li>
            <img src={ checkMark2 } alt="check_mark_green" />
              MySQL
            </li>
            <li>
            <img src={ checkMark2 } alt="check_mark_green" />
              SQL
            </li>
            <li>
            <img src={ checkMark2 } alt="check_mark_green" />
              Sequelize
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              TDD
            </li>
          </ul>
          <ul id="secondUl">
            <li>
            <img src={ checkMark2 } alt="check_mark_green" />
              Jest
            </li>
            <li>
            <img src={ checkMark2 } alt="check_mark_green" />
              Mocha
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              Chai
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              Sinon
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              React Test Library
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              Redux
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              Git
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              GitHub
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              Docker
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              Heroku
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              NodeJS
            </li>
            <li>
              <img src={ checkMark2 } alt="check_mark_green" />
              Express
            </li>
          </ul>
        </div>
      </div>
    </SkillsWrapper>
  );
}