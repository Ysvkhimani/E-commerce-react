import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const SliderImages = () => {
  const [images, setImages] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  const settings = {
    
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  
  
  return (
    <div className='main'>
      
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={image.id}>
            <img 
              src={`${image.download_url}?w=100&h=00`}
              alt={image.author} 
              style={{ width: '100%', height: '700px', cursor: 'pointer' }} 
             
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderImages;