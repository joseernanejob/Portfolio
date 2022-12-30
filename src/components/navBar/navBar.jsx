import { useState } from 'react';
import { Link } from 'react-scroll';

import './navBar.css';

export default function NavBar() {
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY > 800) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  const [navBar, setBar] = useState(true);

  window.addEventListener('scroll', setFixed);
  return (
    <>
      <div className='container' id={fix ? 'ativarCor' : 'desativarCor'}>
        <div className='text-links'>
          <Link
            className='text-link'
            to='home'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
          <Link
            className='text-link'
            to='skills'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
          <Link
            className='text-link'
            to='projects'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>

          <a
            href='https://www.linkedin.com/in/jose-ernane-dias-rodrigues-313b15242/'
            target={'_blank'}
            className='text-link'
          >
            Contato
          </a>
        </div>
      </div>
    </>
  );
}
