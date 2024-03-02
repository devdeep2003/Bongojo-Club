import React from 'react';
import '../index.css'; 
import lead from '../assets/ankita.png';
import colead from '../assets/rishika.png';
import prhead from '../assets/ghorai.png';
import member1 from '../assets/sagnik.png'
import member2 from '../assets/sudhanshu.png'
import member3 from '../assets/dhali.png'
import member4 from '../assets/avishkar.png'
import member5 from '../assets/shubham.png'


import { Zoom } from 'react-reveal';

const GlassmorphicCards = () => {
  return (

    <>
 

    <Zoom>
    <h1 className='text_center'>Media and Outreach Team</h1> 
    <div className="glassmorphic-cards-container">
    
      <div className="glass-card">
        <img src={lead} alt="Circular Image 1" className="admin-circular-image" />
        <h1>Ankita Tiwari</h1>
        <p>Lead</p>
      </div>
      <div className="glass-card">
        <img src={colead} alt="Circular Image 2" className="admin-circular-image" />
        <h1>Rishika Ghosh</h1>
        <p>Co-Lead</p>
      </div>
      <div className="glass-card">
        <img src={prhead} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Subhadeep Ghorai</h1>
        <p>PR-Head</p>
      </div>
      <div className="glass-card">
        <img src={member1} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Sagnik Ray</h1>
        <p>Member</p>
      </div>
    </div>
    <div className="glassmorphic-cards-container">
    <div className="glass-card">
        <img src={member2} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Sudhanshu Kumar</h1>
        <p>Member</p>
      </div>
      <div className="glass-card">
        <img src={member3} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Debasmita Dhali</h1>
        <p>Member</p>
      </div> 
      <div className="glass-card">
        <img src={member4} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Avishkar Maitra</h1>
        <p>Member</p>
      </div>
      <div className="glass-card">
        <img src={member5} alt="Circular Image 4" className="admin-circular-image" />
        <h1>Subham Basak</h1>
        <p>Member</p>
      </div>
      </div>
    </Zoom>
    </>
  );
};

export default GlassmorphicCards;
