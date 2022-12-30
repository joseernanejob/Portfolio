import './projects.css';

import LoginTravel from '../../assets/LoginTravel.png';
import RobotLogin from '../../assets/RobotLogin.png';

export default function Projects() {
  return (
    <div className='container-projects' id='projects'>
      <h2 className='title-projects'>Projects</h2>
      <div className='images-projects'>
        <div className='item-projects'>
          <a
            href={'https://github.com/joseernanejob/LoginTravel.git'}
            target={'_blank'}
          >
            <img src={LoginTravel} alt='' />
          </a>
          <a
            href={'https://github.com/joseernanejob/Robot-Login.git'}
            target={'_blank'}
          >
            <img src={RobotLogin} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}
