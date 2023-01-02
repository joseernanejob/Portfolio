import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import './index.css';

export default function Contatos() {
  return (
    <div className='contatos-container' id='contatos'>
      <h2 className='contatos-title'>Contatos</h2>
      <ul className='contatos-list'>
        <li>
          <a
            href='https://www.linkedin.com/in/jose-ernane-dias-rodrigues-313b15242/'
            target={'_blank'}
          >
            <AiFillLinkedin className='contatos-icons' />
            <p>Linkedin</p>
          </a>
        </li>
        <li>
          <a href='https://github.com/joseernanejob' target={'_blank'}>
            <FaGithubSquare className='contatos-icons' />
            <p>GitHub</p>
          </a>
        </li>
        <li>
          <a href='mailto:jose.ernane.job@gmail.com' target={'_blank'}>
            <MdEmail className='contatos-icons' />
            <p>Email</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
