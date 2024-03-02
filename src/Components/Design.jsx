import React from 'react';
import '../index.css'; 
import lead from '../assets/shekher.png';
import member1 from '../assets/atma.png'
import member2 from '../assets/samanta.png'
import member3 from '../assets/romit.png'
import member4 from '../assets/sanyal.png'



import { Zoom } from 'react-reveal';

const GlassmorphicCards = () => {
  return (

    <>

    <Zoom>
    <h1 className='text_center'>Design Team</h1> 
    <div className="glassmorphic-cards-container">
    
      <div className="glass-card">
        <img src={lead} alt="Circular Image 1" className="admin-circular-image" />
        <h1>Ahindra Sekhar Dey</h1>
        <p>Lead</p>
      </div>
      <div className="glass-card">
        <img src={member1} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Atmadip Bakshi</h1>
        <p>Member</p>
      </div>
      <div className="glass-card">
        <img src={member2} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Souradeep Samanta</h1>
        <p>Member</p>
      </div>
      <div className="glass-card">
        <img src={member3} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Romit Das</h1>
        <p>Member</p>
      </div>
      <div className="glass-card">
        <img src={member4} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Shreesh Sanyal</h1>
        <p>Member</p>
      </div>
    </div>
    </Zoom>
    </>
  );
};

export default GlassmorphicCards;
