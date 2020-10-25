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
        <div className="project">
          <a href="https://sublit.io/">
            <div className="img-wrap">
              <img alt=" " className="img-project" src={Sublit} />
              <p className="img-description">Airbnb-style website for Dartmouth Off-Campus Housing</p>
            </div>
          </a>
          <a href="https://github.com/dartmouth-cs52-20X/project-sublit"><h1>SubLit <i className="fab fa-github" /></h1></a>
        </div>
        <div className="project">
          <a href="http://dartmouth-2020.surge.sh/">
            <div className="img-wrap">
              <img alt=" " className="img-project" src={Commencement} />
              <p className="img-description">Special Edition Website for Commencement Articles and Leaving Messages for Seniors</p>
            </div>
          </a>
          <a href="https://github.com/mattroth17/Commencement-2020"><h1>The Dartmouth: Commencement 2020 Site <i className="fab fa-github" /></h1></a>

        </div>
        <div className="project">
          <a href="https://github.com/mattroth17/COVID-19_Vulnerability">
            <div className="img-wrap">
              <img alt=" " className="img-project" src={Covid} />
              <p className="img-description">Machine Learning Models for Predicting COVID-19 Vulnerability on a County Level in the U.S.</p>
            </div>
          </a>
          <a href="https://github.com/mattroth17/COVID-19_Vulnerability"><h1>COVID-19 Vulnerability on a County Level <i className="fab fa-github" /></h1></a>
        </div>
      </div>
    );
  }
}

export default Projects;
