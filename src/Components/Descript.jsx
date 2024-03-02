
import React from 'react';
import '../index.css'; 
import logo from '../assets/logo.png'
import { Fade, Rotate, Zoom } from 'react-reveal';

const RotatingImageSection = () => {
  return (
    <div className="descript-section-container">
        <Zoom>
      <div className="image-container">
        <img src={logo} alt="Rotating Image" className="rotating-image" />
      </div>
      </Zoom>
      <Fade>
      <div className="glass-container">
        <h2>বঙ্গজ</h2>
      <p>বঙ্গজ হলো আমাদের কলেজের একটি গর্বিত ক্লাব, যা বাঙালি সাংস্কৃতিক সমৃদ্ধির প্রচেষ্টা করে। এই সম্প্রদায়িক সংগঠনের মাধ্যমে আমরা বাঙালি উৎসব, সাহিত্য, ও শিক্ষার মাধ্যমে সহসম্প্রদায়িক একতা সৃষ্টি করতে প্রতিবদ্ধ। বঙ্গজ বাঙালি ছাত্র-ছাত্রীদের মধ্যে একত্রিত হয়, উদ্ভাবনশীল ইভেন্টস আয়োজন করে, এবং বিভিন্ন সামাজিক কর্মকাণ্ডে অংশগ্রহণ করে। বঙ্গজ একটি সাংস্কৃতিক রংমুদ্রা, যা বাঙালি ভাষা, সাহিত্য, ও কলচার উন্নতির জন্য সক্রিয়ভাবে কাজ করে।</p>
      <h2>Bongojo</h2>
      <p>
        
Bongojo is a proud club in our college that strives for Bengali cultural enrichment. Through this cultural organization, we endeavor to foster unity through Bengali festivals, literature, and educational initiatives. Bongoj brings together Bengali students, organizes innovative events, and actively participates in various social activities. Bongojo serves as a cultural emblem, actively working towards the advancement of Bengali language, literature, and culture.
      </p>
      
      </div>
      </Fade>
    </div>
  );
};

export default RotatingImageSection;
