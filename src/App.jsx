import NavBar from './components/navBar/navBar';
import Main from './components/main/main';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import './App.css';

function App() {
  return (
    <div className='backGround'>
      <NavBar />
      <Main />
      <Skills />
      {/* <Projects /> */}
    </div>
  );
}

export default App;
