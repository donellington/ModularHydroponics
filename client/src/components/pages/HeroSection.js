import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <div className= 'h1'>STEM'N'LEAF</div>
      <p>MAKE LIKE A TREE AND GROW</p>
      <div className='hero-btns'>
           <Link
                to="/register"
                style={{
                  height: "70px",
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            <Link
                to="/login"
                style={{
                  height: "70px",
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
      </div>
    </div>

    
  );
}

export default HeroSection;
