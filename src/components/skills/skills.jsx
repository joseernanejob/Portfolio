import './skills.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { AiFillGithub } from 'react-icons/ai';

export default function Skills() {
  return (
    <div className='skills-container' id='skills'>
      <h2 className='skills-title'>Skills</h2>
      <div className='box-skills-list'>
        <ul className='skills-list'>
          <li>
            <AiFillHtml5 className='icon-skills' />
            <h2>HTML</h2>
          </li>
          <li>
            <DiCss3 className='icon-skills' />
            <h2>css</h2>
          </li>
          <li>
            <DiJavascript1 className='icon-skills' />
            <h2>JavaScript</h2>
          </li>
          <li>
            <DiReact className='icon-skills' />
            <h2>React</h2>
          </li>
          <li>
            <AiFillGithub className='icon-skills' />
            <h2>Github</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
