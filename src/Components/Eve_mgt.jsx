import React from 'react';
import '../index.css';
import lead from '../assets/dipto.png';
import colead1 from '../assets/sopno.png';
import colead2 from '../assets/shantanu.png';
import organizer1 from '../assets/sneha.png';
import organizer2 from '../assets/deep.webp';
import member1 from '../assets/argho.png'
import member2 from '../assets/ishita.png'
import member3 from '../assets/maitree.png'
import member4 from '../assets/diksha.png'
import member5 from '../assets/pinak.png'
import member6 from '../assets/sayan.png'

import { Zoom } from 'react-reveal';

const GlassmorphicCards = () => {
  return (

    <>
      <h1 className='text_center'>Event Management Team</h1>

      <Zoom>
        <h1 className='text_center'>Event Management Team</h1>
     
        <div className="glassmorphic-cards-container">
          <div className="glass-card">
            <img src={lead} alt="Circular Image 1" className="admin-circular-image" />
            <h1>Diptorshi Tripathi</h1>
            <p>Lead</p>
          </div>
          <div className="glass-card">
            <img src={colead1} alt="Circular Image 2" className="admin-circular-image" />
            <h1>Swapnaneel Sarkar</h1>
            <p>Co-Lead</p>
          </div>
          <div className="glass-card">
            <img src={colead2} alt="Circular Image 3" className="admin-circular-image" />
            <h1>Shantanu Maity</h1>
            <p>Co-Lead</p>
          </div>
          <div className="glass-card">
            <img src={organizer1} alt="Circular Image 4" className="admin-circular-image" />
            <h1>Snehashree Nayak</h1>
            <p>Organizer</p>
          </div>
          </div>
     
        <div className="glassmorphic-cards-container">
          <div className="glass-card">
            <img src={organizer2} alt="Circular Image 4" className="admin-circular-image" />
            <h1>Deep Chakraborty</h1>
            <p>Organizer</p>
          </div>
          <div className="glass-card">
            <img src={member1} alt="Circular Image 4" className="admin-circular-image" />
            <h1>Arghya Ghosh</h1>
            <p>Member</p>
          </div>
          <div className="glass-card">
            <img src={member2} alt="Circular Image 4" className="admin-circular-image" />
            <h1>Ishita Manna</h1>
            <p>Member</p>
          </div>
          <div className="glass-card">
            <img src={member3} alt="Circular Image 4" className="admin-circular-image" />
            <h1>Maitreyee Mukherjee</h1>
            <p>Member</p>
          </div>
        </div>
      


     
        <div className="glassmorphic-cards-container">
          <div className="glass-card">
            <img src={member4} alt="Circular Image 4" className="admin-circular-image" />
            <h1>Deeksha Nagarajan</h1>
            <p>Member</p>
          </div>
          <div className="glass-card">
            <img src={member5} alt="Circular Image 4" className="admin-circular-image" />
            <h1>Pinakpani Dasgupta</h1>
            <p>Member</p>
          </div>
          <div className="glass-card">
            <img src={member6} alt="Circular Image 4" className="admin-circular-image" />
            <h1>Sayan <br /> Pal</h1>
            <p>Member</p>
          </div>
        </div>
      </Zoom>


 
    
    </>
  );
};

export default GlassmorphicCards;
