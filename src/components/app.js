import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Projects from './projects';
import AboutMe from './aboutMe';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>about me</NavLink></li>
        <li><NavLink to="/projects">projects</NavLink></li>
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <Router>
      <div id="main">
        <Nav />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
