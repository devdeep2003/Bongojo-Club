
import React from 'react';
import '../index.css'; 
import president from '../assets/president.png'
import { Fade, Rotate, Zoom } from 'react-reveal';

const RotatingImageSection = () => {
  return (
    <>
    <h1 className='text_center'>From the President</h1>
    <div className="section-container">
    <Zoom>
  <div className="president-image-container">
    <img src={president} alt="Rotating Image" className="president-image" />
  </div>
  </Zoom>
  <Fade>
  <div className="glass-container">
    <h2>অনিক সাহা অর্ণ</h2>
  <p>বঙ্গজ ক্লাবের প্রেসিডেন্ট হিসেবে, আমি আনন্দিত ভাবে এই সমৃদ্ধ সাংস্কৃতিক পরিবারের প্রধান। বঙ্গজ একটি অদ্ভুত সম্প্রদায়িক প্ল্যাটফর্ম, যেখানে আমরা বাঙালি সাংস্কৃতিক সমৃদ্ধির আনন্দ নিয়েছি। আমাদের কার্যক্রম এবং ইভেন্টস আমাদের সম্প্রদায়ের আবহাওয়া সাঁতার দেয়, এবং এই সমৃদ্ধ পরিবারের উন্নতিতে অবদান রয়েছে।

এই সময়ে, আমি ক্লাব কো-অর্ডিনেটরকে ধন্যবাদ জানাতে চাই যা আমাদের সম্প্রদায়িক উন্নতির জন্য অমূল্য অবদান রয়েছে। তার উদ্যোগ, নেতৃত্ব, এবং সকল সদস্যদের প্রতি আত্মনির্ভরশীল অংশগ্রহণের জন্য আমি আবারও আভারী। তার সাথে কাজ করতে এবং এই উৎসবময় যাত্রায় সকল সদস্যদের সাথে এক হতে সত্বর আবারও আমন্ত্রিত হয়েছি!</p>
  <h2>Anik Saha Aorno</h2>
  <p>
    
  As the President of Bongojo Club, I am thrilled to be at the forefront of this vibrant cultural family. Bongojo stands as an incredible cultural platform where we take delight in the richness of Bengali heritage. Our programs and events contribute to the lively atmosphere of our community, playing a vital role in the development of this flourishing family.

At this moment, I want to express my gratitude to the Club Coordinator, whose invaluable contributions have been priceless for the cultural advancement of our community. I am truly thankful for their initiative, leadership, and the self-reliant participation of all members. I look forward to continuing to work with them and extend a swift invitation to all members to join hands again on this festive journey!
  </p>
  
  </div>
  </Fade>
</div>

</>
    
  );
};

export default RotatingImageSection;
