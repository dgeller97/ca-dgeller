import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import Projects from './components/Projects/Projects';




function App() {


  return (
    <div className="App">

      <header className="App-header">
        <div className="Logo-container">
        <Logo size="1.2em"> </Logo>  {/* left side */}
        </div>

        <div className='Menu'> 
          <ul>
            <li>
              <a href='#About'>About</a>
            </li>
            <li>
              <a href='#Experience'>Experience</a>
            </li>
            <li>
              <a href='#Projects'>Projects</a>
            </li>
            <li>
              <a href='#Contact'>Contact</a>
            </li>
          </ul>
        </div>

      </header>

      <div clasName='Body'> 
        <Home></Home>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </div>
  );


}

export default App;
