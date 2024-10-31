import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import swift from './assets/swift.webp';
import toyota from './assets/toyota.jpg';
// import hyundai from './assets/hyundai.jpg';
import etios from './assets/etios.webp';
import bus1 from './assets/bus1.avif';
// import bus2 from './assets/bus3.webp';

const imageData = [
  { name: 'Swift Dzire', image: swift },
  { name: 'Toyota Innova', image: toyota },
  // { name: 'Hyundai Creta', image: hyundai },
  { name: 'Etios Vehicle', image: etios },
  { name: 'Bus', image: bus1 },
  // { name: 'Bus 2', image: bus2 },
];

const ImageCarousel = () => {
  const settings = {
    dots: true, // Display dots below the carousel for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto slide
    autoplaySpeed: 3000, // Time between each auto slide (3 seconds)
    arrows: false, // Hide next/prev arrows
  };

  return (
    <Box sx={{ maxWidth: '100%', margin: 'auto', padding: 2 }}>
      {/* Content at the top of the images */}
      <Typography variant="h5" sx={{ textAlign: 'center', color: '#414a4c', mb: 2 }}>
        Welcome to TT Travels Your reliable partner for car and bus rentals in Tirupati.
      </Typography>

      <Slider {...settings}>
        {imageData.map((item, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
              className="carousel-image"
            />
            <Typography
              variant="h5"
              sx={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '5px 10px',
                borderRadius: '5px',
              }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
