import React from 'react';
import { Fade, Rotate, Zoom } from 'react-reveal';
import { Gallery } from './Components/Gallery';
import './index.css'

function Events() {
  return (
    <div>
   
      <Fade>
        <div className='image'>
           <Gallery/>
      </div>


      </Fade>
    </div>
  )
}

export default Events
