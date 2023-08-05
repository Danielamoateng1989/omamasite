import React from 'react';
import video from '../media/omambannervid.mp4';

const Hero = () => {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1>COMPASSION, CARE AND INTEGRITY IS OUR PASSION</h1>
        <div>
        <p>You can get in touch with us through the contact information listed on this website.
         We would be more than happy to be of assistance to You
         </p>
         </div>
      </div>
      <div className="hero-overlay"></div>
    </div>
  );
}

export default Hero;
