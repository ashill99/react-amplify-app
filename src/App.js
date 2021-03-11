import './css/App.css';
// import  { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { Link, animateScroll as scroll } from "react-scroll";
import Nav from './components/Nav'



function App() {

  return (
    <div className="wrapper">              
        <Nav />

      <div className="hero">
        <Hero />
      </div>

        <Home 
            title="Home"
            dark={true}
            id="Home"
          />
          <Projects 
            title="Projects"
            dark={true}
            id="Projects"
            />
        </div>
  );
};

export default App;
