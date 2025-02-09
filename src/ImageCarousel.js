// import React from 'react';
// import Slider from 'react-slick';
// import { Box, Typography } from '@mui/material';
// import swift from './assets/swift.webp';
// import toyota from './assets/toyota.jpg';
// import etios from './assets/etios.webp';
// import bus1 from './assets/bus1.avif';

// const imageData = [
//   { name: 'Swift Dzire', image: swift },
//   { name: 'Toyota Innova', image: toyota },
//   { name: 'Etios Vehicle', image: etios },
//   { name: 'Bus', image: bus1 },
// ];

// const ImageCarousel = () => {
//   const settings = {
//     dots: true, 
//     infinite: true,
//     speed: 500, 
//     slidesToShow: 1,
//     slidesToScroll: 1, 
//     autoplay: true, 
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <Box sx={{ maxWidth: '100%', margin: 'auto', padding: 2 }}>
      
//       <Typography variant="h5" sx={{ textAlign: 'center', color: '#414a4c', mb: 2 }}>
//         Welcome to TT Travels Your reliable partner for car and bus rentals in Tirupati.
//       </Typography>

//       <Slider {...settings}>
//         {imageData.map((item, index) => (
//           <Box key={index} sx={{ position: 'relative' }}>
//             <img
//               src={item.image}
//               alt={item.name}
//               style={{
//                 width: '100%',
//                 height: '300px',
//                 objectFit: 'cover',
//                 borderRadius: '10px',
//               }}
//               className="carousel-image"
//             />
//             <Typography
//               variant="h5"
//               sx={{
//                 position: 'absolute',
//                 bottom: '20px',
//                 left: '20px',
//                 color: '#fff',
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 padding: '5px 10px',
//                 borderRadius: '5px',
//               }}
//             >
//               {item.name}
//             </Typography>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default ImageCarousel;

import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import swift from './assets/swift.webp';
import toyota from './assets/toyota.jpg';
import etios from './assets/etios.webp';
import bus1 from './assets/bus1.avif';

const imageData = [
  { name: 'Swift Dzire - Comfortable Sedan for Family Trips', image: swift },
  { name: 'Toyota Innova - Premium SUV for Luxurious Travel', image: toyota },
  { name: 'Etios Vehicle - Stylish and Efficient Rides', image: etios },
  { name: 'Luxury Bus - Ideal for Group Travel & Tours', image: bus1 },
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box sx={{ maxWidth: '100%', margin: 'auto', padding: 2 }}>
      <Helmet>
        <title>TT Travels - Best Car & Bus Rentals in Tirupati</title>
        <meta
          name="description"
          content="TT Travels offers premium car and bus rentals in Tirupati, featuring Swift Dzire, Toyota Innova, Etios, and luxury buses for all your travel needs. Affordable, reliable, and comfortable transportation services."
        />
        <meta
          name="keywords"
          content="TT Travels, car rentals Tirupati, bus rentals Tirupati, Swift Dzire, Toyota Innova, Etios, group travel, Tirupati travel services"
        />
      </Helmet>

      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: '#303f9f',
          fontWeight: 'bold',
          mb: 4,
        }}
      >
        Discover Comfortable & Affordable Travel with TT Travels
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

      <Box sx={{ mt: 4, textAlign: 'center', color: '#424242' }}>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 2 }}>
          Looking for reliable and affordable car or bus rentals in Tirupati?
          TT Travels offers a premium fleet including Swift Dzire, Toyota Innova, Etios, and luxury buses for every travel need.
        </Typography>
        <Typography variant="body1">
          Whether you're planning a family trip, corporate event, or group outing, we've got the perfect vehicle for you.
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', color: '#303f9f' }}>
          Contact us today at +91 9391711883 or visit our website to book your ride!
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
