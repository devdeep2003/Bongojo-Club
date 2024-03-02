import React from 'react';
import '../index.css'; 
import vp from '../assets/vp.png';
import secretary from '../assets/secretary.png';
import ass_sec from '../assets/ass_sec.png';
import treasurer from '../assets/treasurer.png';
import { Zoom } from 'react-reveal';

const GlassmorphicCards = () => {
  return (

    <>
    <h1 className='text_center'>Our Admins</h1>

    <Zoom>
    <div className="glassmorphic-cards-container">
      <div className="glass-card">
        <img src={vp} alt="Circular Image 1" className="admin-circular-image" />
        <h1>Preetam Show</h1>
        <p>Vice President</p>
      </div>
      <div className="glass-card">
        <img src={secretary} alt="Circular Image 2" className="admin-circular-image" />
        <h1>Ishan Das</h1>
        <p>Secretary</p>
      </div>
      <div className="glass-card">
        <img src={ass_sec} alt="Circular Image 3" className="admin-circular-image" />
        <h1>Rishav Sinha</h1>
        <p>Assistant Secretary</p>
      </div>
      <div className="glass-card">
        <img src={treasurer} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Dayita Halder</h1>
        <p>Treasurer</p>
      </div>
      
    </div>
    </Zoom>
    </>
  );
};

export default GlassmorphicCards;
