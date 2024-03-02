import React from 'react';
import '../index.css'; 
import lead from '../assets/tusher.png';
import colead from '../assets/uddi.png';
import member1 from '../assets/jyoti.png'
import member2 from '../assets/ayush.png'
import member3 from '../assets/sumanko.png'
import member4 from '../assets/hritam.png'



import { Zoom } from 'react-reveal';

const GlassmorphicCards = () => {
  return (

    <>

    <Zoom>
    <h1 className='text_center'>Documentation Team</h1> 
    <div className="glassmorphic-cards-container">
    
      <div className="glass-card">
        <img src={lead} alt="Circular Image 1" className="admin-circular-image" />
        <h1>Mahatir Ahmed Tusher</h1>
        <p>Lead</p>
      </div>
      <div className="glass-card">
        <img src={colead} alt="Circular Image 2" className="admin-circular-image" />
        <h1>Uddipan Mondal</h1>
        <p>Co-Lead</p>
      </div>
      <div className="glass-card">
        <img src={member1} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Shubhrajyoti Ghose Biswas</h1>
        <p>Member</p>
      </div>
      <div className="glass-card">
        <img src={member2} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Ayush Saha</h1>
        <p>Member</p>
      </div>
 
      <div className="glassmorphic-cards-container">
      <div className="glass-card">
        <img src={member3} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Somanko Mukhopadhyay</h1>
        <p>Member</p>
      </div>
      <div className="glass-card">
        <img src={member4} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Hritam Basak</h1>
        <p>Member</p>
      </div>
    </div>
    </div>
    </Zoom>
    </>
  );
};

export default GlassmorphicCards;
