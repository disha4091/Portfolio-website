import logo from './logo.svg';
import './App.css';
import Mainpage from './Mainpage' ;
import About from './About';
import Navbar from './Navbar';
import Project from './Project';
import Skill from './Skill';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mainpage/>
      <div class="line"></div>
      <About/>
      <div class="line"></div>
      <Education/>
      <div class="line"></div>
      <Experience/>
      <div class="line"></div>
      <Project/>
      <div class="line"></div>
      <Skill/>
      <div class="line"></div>
      <Contact/>
      
    </div>
  );
}

export default App;
