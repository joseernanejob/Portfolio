import './projects.css';

import LoginTravel from '../../assets/Login-travel.png';
import RobotLogin from '../../assets/Robot-Login.png';

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
        {imgs.map((image, key) => (
          <div className='item-projects' key={key}>
            <a href={image.link} target={'_blank'}>
              <img src={image.img} alt='Images' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
