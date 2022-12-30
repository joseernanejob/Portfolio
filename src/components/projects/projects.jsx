import './projects.css';

import LoginTravel from '../../assets/Logintravel.png';
import RobotLogin from '../../assets/RobotLogin.png';

const imgs = [
  {
    img: LoginTravel,
    link: 'https://github.com/joseernanejob/LoginTravel.git',
  },
  {
    img: RobotLogin,
    link: 'https://github.com/joseernanejob/Robot-Login.git',
  },
];

export default function Projects() {
  return (
    <div className='container-projects' id='projects'>
      <h2 className='title-projects'>Projects</h2>
      <div className='images-projects'>
        <div className='item-projects' key={key}>
          <a
            href={'https://github.com/joseernanejob/LoginTravel.git'}
            target={'_blank'}
          >
            <img src={LoginTravel} alt='Images' />
          </a>
          <a
            href={'https://github.com/joseernanejob/Robot-Login.git'}
            target={'_blank'}
          >
            <img src={RobotLogin} alt='Images' />
          </a>
        </div>
      </div>
    </div>
  );
}
