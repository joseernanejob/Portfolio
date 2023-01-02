import TypeIt from 'typeit-react';

import './main.css';
import alien from '../../assets/outer-space-animate.svg';
import { BsArrowRight } from 'react-icons/bs';

export default function Main() {
  return (
    <div className='main-Container' id='home'>
      <div className='text-box'>
        <h2 id='bem-vindo'>Bem-Vindo ao meu Portifólio</h2>
        <h2 id='title'>
          Hello World! <br />
          <TypeIt
            options={{
              loop: true,
              speed: 200,
            }}
            getBeforeInit={(instance) => {
              instance
                .type('Sou Jose Ernane!')
                .pause(750)
                .delete(12)
                .pause(500)
                .type('Desenvolvedor Web!');

              // Remember to return it!
              return instance;
            }}
          />
        </h2>
        <p>
          Natural de Rio Maria - PA e atualmente com 22 anos, sou um entusiasta
          do mundo da tecnologia desde criança. Possuo formação acadêmica em
          Análise e Desenvolvimento de Sistemas pela Faculdade Estácio e
          atualmente em formação de Desenvolvedor Web FullStack pela Kenzie
          Academy Brasil. Minha especialidade é na atuação com Front-End, mas
          tenho buscado continuamente o aperfeiçoamento profissional também em
          Back-End.
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
