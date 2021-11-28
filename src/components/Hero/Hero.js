import React from 'react';
import './Hero.css';

const Hero = (props) => (
  <div className="Hero">
    <div className="hero-container">
      <img src={props.heroSelection.backdrop_path}/>
    </div>
    <div className="detail-container">
        <div>
          <h1>{props.heroSelection.title}</h1>
          <h3>Rating: <span>{props.heroSelection.vote_average}</span></h3>
        </div>
        <div>
          <p>{props.heroSelection.overview}</p>
        </div>
    </div>
    
  </div>
);

export default Hero;
