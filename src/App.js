import './App.css';
import Home from './Components/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from './Components/Projects/Projects';
import AboutMe from './Components/AboutMe/AboutMe';
import ContactMe from './Components/ContactMe/ContactMe';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/projects'>
          <Projects></Projects>
        </Route>
        <Route  path='/aboutMe'>
          <AboutMe></AboutMe>
        </Route>
        <Route  path='/contactMe'>
          <ContactMe></ContactMe>
        </Route>
        <Route  path='/blogs'>
          <Blogs></Blogs>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
