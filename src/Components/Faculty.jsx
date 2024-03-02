import React from 'react';
import '../index.css'; 
import { Fade, Rotate, Zoom } from 'react-reveal';
import sir from "../assets/sir.png"

const GlassSection = () => {
  return (
    <>
    <h1 className='text_center'>From the Faculty Coordinator</h1>
    <div className="glass-section-container">
        <Fade>
      <div className="glass-container">
        <h2>ডঃ রাজর্ষি সরকার</h2>
        <p>বঙ্গজ ক্লাব কো-অর্ডিনেটর হিসেবে আমি গর্বিত অনুভূত হই। বঙ্গজ মাত্র একটি ক্লাব নয়; এটি একটি বাঙালি সংস্কৃতির উৎসব, একটি একতা ও গর্বের অনুভূতি সৃষ্টি করা। আমরা উৎসব, সাহিত্যিক ঘটনা, এবং শিক্ষামূলক উদ্যোগের মাধ্যমে বাঙালি সংস্কৃতির উন্নতির জন্য আত্মনির্ভরভাবে প্রতিবদ্ধ। আমাদের ব্যাপক পরিস্থিতি, গুণমুদ্রা পূর্ণ ইভেন্টস থেকে সামাজিক কর্মকাণ্ডে সক্রিয় অংশগ্রহণের মাধ্যমে আমাদের সম্পর্কের মৌল্য দেখায়। বঙ্গজ বাঙালি ভাষা, সাহিত্য, এবং সাংস্কৃতিক উন্নতির দিকে একটি চমৎকার কাজ করছে, এটি আপনাদেরকে সাংস্কৃতিক অন্বেষণ এবং একতার এই আনন্দময় পথে আসতে আমন্ত্রণ জানায়!</p>
        <h2>Dr.Rajarshi Sarkar</h2>
        <p>As the proud club coordinator of Bongojo, I am delighted to introduce a vibrant cultural hub within our college community. Bongojo is not just a club; it's a celebration of Bengali richness, fostering a sense of togetherness and pride. We passionately organize and host Bengali festivals, literary events, and educational initiatives, creating a lively space for cultural exchange. Our diverse range of activities, from dynamic events to active participation in social causes, reflects our commitment to community building. Bongojo stands as a cultural catalyst, igniting enthusiasm for Bengali language, literature, and traditions. Join us on this exhilarating journey of cultural exploration and unity!</p>
      </div>
      </Fade>
      <Zoom>
      <div className="circular-image-container">
        <img src={sir}alt="Circular Image" className="circular-image" />
      </div>
      </Zoom>
    </div>
    </>
    
  );
};

export default GlassSection;
