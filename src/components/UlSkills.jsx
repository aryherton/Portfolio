import React from 'react';

import { checkMark2 } from '../image';
import arrSkill from '../help/tecnologSkill.js';

export default function UlSkills() {
    return (
      <div id="divMainSkills">
        <h1>MINHAS SKILLS</h1>
        <div id="divSkills">
          <ul id="firstUl">
            {arrSkill.map((item, index) => {
              if (index < 11) {
                return (<li key={index}>
                  <img src={checkMark2} alt="check_mark_green" />
                  {item}
                </li>)
              }
              return null;
            })
            }
          </ul>
          <ul id="secondUl">
            {arrSkill.map((item, index) => {
              if (index > 10) {
                return (<li key={index}>
                  <img src={checkMark2} alt="check_mark_green" />
                  {item}
                </li>)
              }
              return null;
            })
            }
          </ul>
        </div>
      </div>
    );
}