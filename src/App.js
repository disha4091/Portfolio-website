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
      <About/>
      <Education/>
      <Experience/>
      <Project/>
      <Skill/>
      <Contact/>
      
    </div>
  );
}

export default App;
