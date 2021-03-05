import './css/App.css';
import  { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from './Pages/Home'
import Projects from './Pages/Projects/Projects'
import NavBar from './components/NavBar'


function App() {

  return (
      <div>
      <header className="App-header">
        <h1>Adam Shilling</h1>
        <div className="Wrapper">
          <BrowserRouter>
          <NavBar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
            </Switch>
        </BrowserRouter>
        </div>
      </header>
      </div>
  );
};

export default App;
