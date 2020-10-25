import React, { Component } from 'react';
import Covid from '../img/covid.png';
import Sublit from '../img/sublit.png';
import Commencement from '../img/commencement.png';
// import * as db from '../services/datastore';

// eslint-disable-next-line react/prefer-stateless-function
class Projects extends Component {
  render() {
    return (
      <div id="projects-section">
        <a href="https://sublit.io/">
          <div className="project">
            <div className="img-wrap">
              <img alt=" " className="img-project" src={Sublit} />
              <p className="img-description">Airbnb-style website for Dartmouth Off-Campus Housing</p>
            </div>
            <h1>SubLit <i href="https://github.com/dartmouth-cs52-20X/project-sublit" className="fab fa-github" /></h1>
          </div>
        </a>
        <a href="http://dartmouth-2020.surge.sh/">
          <div className="project">
            <div className="img-wrap">
              <img alt=" " className="img-project" src={Commencement} />
              <p className="img-description">Special Edition Website for Commencement Articles and Leaving Messages for Seniors</p>
            </div>
            <h1>The Dartmouth: Commencement 2020 Site <i href="https://github.com/mattroth17/Commencement-2020" className="fab fa-github" /></h1>
          </div>
        </a>
        <a href="https://github.com/mattroth17/COVID-19_Vulnerability">
          <div className="project">
            <div className="img-wrap">
              <img alt=" " className="img-project" src={Covid} />
              <p className="img-description">Machine Learning Models for Predicting COVID-19 Vulnerability on a County Level in the U.S.</p>
            </div>
            <h1>COVID-19 Vulnerability on a County Level <i href="https://github.com/mattroth17/COVID-19_Vulnerability" className="fab fa-github" /></h1>
          </div>
        </a>
      </div>
    );
  }
}

export default Projects;
