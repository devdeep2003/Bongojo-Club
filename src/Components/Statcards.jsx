// GlassmorphicCards.js
import React, { useState } from 'react';
import '../index.css'; // Import the CSS file for styling
import CountUp from 'react-countup';



const GlassmorphicCards = () => {
  return (

    
    <div className="glassmorphic-cards-container">
      <div className="glass-card">
        <h2>
            <CountUp  end={33} duration={20} />+
        </h2>
        <p>Active Members</p>
      </div>
      <div className="glass-card">
        <h2> <CountUp  end={120} duration={20} />+</h2>
        <p>Our Family</p>
      </div>
      <div className="glass-card">
        <h2><CountUp  end={3} duration={20} />+</h2>
        <p>Events</p>
      </div>
    </div>
  );
};

export default GlassmorphicCards;
