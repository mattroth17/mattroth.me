/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import ReactRoundedImage from 'react-rounded-image';
import Me from '../img/me.png';

// eslint-disable-next-line react/prefer-stateless-function
class AboutMe extends Component {
  render() {
    return (
      <div id="about-me">
        <ReactRoundedImage image={Me} hoverColor="#87e0fd" />
        <div id="my-name">Matthew Roth</div>
        <div className="location">
          <i className="fas fa-map-marker-alt" />
          <div>Chicago, IL</div>
        </div>
        <ul id="bio">
          <li className="bio-bullet">
            <i className="fas fa-university" />
            <div>Junior at Dartmouth and CS major</div>
          </li>
          <li><hr /></li>
          <li className="bio-bullet">
            <i className="fas fa-code" />
            <div>Love building applications with real-world impact</div>
          </li>
          <li className="bio-bullet">
            <i className="fas fa-code-branch" />
            <div>Looking to collaborate on exciting projects at DALI</div>
          </li>
          <li className="bio-bullet">
            <i className="fas fa-basketball-ball" />
            <div>Avid NBA (and LeBron) fan</div>
          </li>
        </ul>
        <ul id="icon-list">
          <a href="https://github.com/mattroth17"><li><i className="fab fa-github" /></li></a>
          <a href="https://www.linkedin.com/in/matthew-c-roth/"><li><i className="fab fa-linkedin-in" /></li></a>
          <a href="https://www.instagram.com/mattroth17/"><li><i className="fab fa-instagram" /></li></a>
        </ul>
      </div>
    );
  }
}

export default AboutMe;
