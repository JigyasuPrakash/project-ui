import React, { useEffect, useState } from 'react';
import pic1 from './photos/pic 1.jpg'
import pic2 from './photos/pic 2.jpg'
import pic3 from './photos/pic 3.jpg'
import pic4 from './photos/pic 4.jpg'
import pic5 from './photos/pic 5.jpg'
import pic6 from './photos/pic 6.jpg'
import pic7 from './photos/pic 7.jpg'
import Button from '@mui/material/Button';
import './gallery.css'
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000); // 1 second interval
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="caro">
      {/* <button className='btn1' onClick={goToPreviousSlide}>Previous</button> */}
      <Button className='btn1' onClick={goToPreviousSlide} variant="contained">Previous</Button>
      <img className='imgdiv' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      {/* <button className='btn1' onClick={goToNextSlide}>Next</button> */}
      <Button className='btn1' onClick={goToNextSlide} variant="contained">Next</Button>
    </div>
  );
};

const Gallery = () => {
  const images = [
    pic1,pic2,pic3,pic4,pic5,pic6,pic7
  ];

  return (
    <div className='carousel'>
      <Carousel images={images} />
    </div>
  );
};

export default Gallery;
