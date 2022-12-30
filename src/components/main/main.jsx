import TypeIt from 'typeit-react';

import './main.css';
import alien from '../../assets/outer-space-animate.svg';
import { BsArrowRight } from 'react-icons/bs';

export default function Main() {
  return (
    <div className='main-Container' id='home'>
      <div className='text-box'>
        <h2 id='bem-vindo'>Bem-Vindo ao meu Portfolio</h2>
        <h2 id='title'>
          Olá! Sou Jose
          <TypeIt
            options={{
              strings: [' Desenvolvedor Web '],
              speed: 200,
              loop: true,
            }}
          />
        </h2>
        <p>
          De Rio Maria - PA, tenho 22 anos, sou formado em Análise e
          Desenvolvimento de Sistemas pela Estácio, hoje em dia sou aluno da
          Kenzie Academy Brasil. Vivo no mundo da tecnologia desde criança,
          atualmente sou Front-End. Procurando-me aperfeiçoar em Back-End.
        </p>
        <a
          href='https://www.linkedin.com/in/jose-ernane-dias-rodrigues-313b15242/'
          target={'_blank'}
        >
          Contato
          <BsArrowRight id='icon-contato' />
        </a>
      </div>
      <div className='img-box'>
        <img src={alien} alt='' />
      </div>
    </div>
  );
}
