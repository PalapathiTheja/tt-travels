// import React from 'react';
// import { Card, CardContent, Typography, CardMedia, Button, CardActions, Grid, Box } from '@mui/material';
// import { Helmet } from 'react-helmet';
// import swift from './assets/swift.webp';
// import toyota from './assets/toyota.jpg';
// import hyundai from './assets/hyundai.jpg';
// import etios from './assets/etios.webp';
// import tempo from './assets/tempo.webp';
// import tempo1 from './assets/tempo1.webp';
// import tempo3 from './assets/tempo3.jpg';
// import bus1 from './assets/bus1.avif';
// import bus2 from './assets/bus3.webp';
// import urbania from './assets/urbania.webp';

// const carData = [
//   {
//     name: 'Force Urbania',
//     image: urbania,
//     rate: '50',
//     maxPeople: '17',
//     minimumKilometers: 350,
//     transmission: 'Automatic',
//     airConditioned: 'Yes',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Swift Dzire',
//     image: swift,
//     rate: '17',
//     maxPeople: '5',
//     minimumKilometers: 300,
//     transmission: 'Manual',
//     airConditioned: 'Yes',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Toyota Innova',
//     image: toyota,
//     rate: '22',
//     maxPeople: '7',
//     minimumKilometers: 300,
//     transmission: 'Automatic',
//     airConditioned: 'Yes',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Hyundai Creta',
//     image: hyundai,
//     rate: '25',
//     maxPeople: '5',
//     minimumKilometers: 300,
//     transmission: 'Manual',
//     airConditioned: 'Yes',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Etios vehicle',
//     image: etios,
//     rate: '17',
//     maxPeople: '5',
//     minimumKilometers: 300,
//     transmission: 'Manual',
//     airConditioned: 'Yes',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Tempo Traveller 13-seater',
//     image: tempo,
//     rate: '30',
//     maxPeople: '13',
//     minimumKilometers: 300,
//     transmission: 'Manual',
//     airConditioned: 'Yes',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Tempo Traveller 18-seater',
//     image: tempo1,
//     rate: '35',
//     maxPeople: '18',
//     minimumKilometers: 300,
//     transmission: 'Manual',
//     airConditioned: 'Yes',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Tempo Traveller 21-seater',
//     image: tempo3,
//     rate: '40',
//     maxPeople: '21',
//     minimumKilometers: 300,
//     transmission: 'Manual',
//     airConditioned: 'Yes',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Mini Bus 21-seater',
//     image: bus1,
//     rate: '40',
//     maxPeople: '21',
//     minimumKilometers: 300,
//     transmission: 'Manual',
//     airConditioned: 'Yes',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Luxury Bus 21-seater',
//     image: bus2,
//     rate: '40',
//     maxPeople: '21',
//     minimumKilometers: 300,
//     transmission: 'Manual',
//     airConditioned: 'Yes',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Luxury Bus 32-seater',
//     image: bus2,
//     rate: '55',
//     maxPeople: '21',
//     minimumKilometers: 300,
//     transmission: 'Manual',
//     airConditioned: 'Yes',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Luxury Bus 40+1-seater',
//     image: bus2,
//     acRate: '65',
//     nonAcRate: '60',
//     maxPeople: '41',
//     minimumKilometers: 300,
//     transmission: 'Manual',
//     airConditioned: 'Yes/No',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: 'Luxury Bus 50-seater',
//     image: bus2,
//     acRate: '70',
//     nonAcRate: '65',
//     maxPeople: '50',
//     minimumKilometers: 300,
//     transmission: 'Manual',
//     airConditioned: 'Yes/No',
//     driverAllowance: '500',
//     phone: '+91 8885544518',
//     permits: ['Tamilnadu', 'Kerala'],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
// ];

// const CarCard = () => {
//   return (
//     <>
//       {/* SEO Enhancements */}
//       <Helmet>
//         <title>Car Rentals in Tirupati | TT Travels - Affordable Rentals</title>
//         <meta
//           name="description"
//           content="Explore affordable car rentals in Tirupati with TT Travels. Choose from Swift Dzire, Toyota Innova, Tempo Travellers, and buses for a comfortable journey."
//         />
//         <meta
//           name="keywords"
//           content="car rentals Tirupati, TT Travels, car hire Tirupati, tempo traveller Tirupati, bus rentals Tirupati, affordable travel Tirupati"
//         />
//         <meta name="author" content="TT Travels" />
//         <meta name="robots" content="index, follow" />
//       </Helmet>

//       {/* Schema Markup for Local Business */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "LocalBusiness",
//           "name": "TT Travels",
//           "description":
//             "Affordable car rentals in Tirupati including Swift Dzire, Toyota Innova, and luxury tempos. Perfect for local and outstation trips.",
//           "image": "https://yourwebsite.com/assets/logo.jpg",
//           "telephone": "+91 8885544518",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "Opposite BMR Parking, Kothapalli",
//             "addressLocality": "Tirupati",
//             "addressRegion": "Andhra Pradesh",
//             "postalCode": "517501",
//             "addressCountry": "IN",
//           },
//           "url": "https://yourwebsite.com",
//           "priceRange": "₹₹",
//           "geo": {
//             "@type": "GeoCoordinates",
//             "latitude": "13.6288",
//             "longitude": "79.4192",
//           },
//         })}
//       </script>

//       {/* Car Cards */}
//       <Grid container spacing={4} justifyContent="center">
//         {carData.map((car, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Card
//               sx={{
//                 maxWidth: 345,
//                 margin: 'auto',
//                 borderRadius: 2,
//                 boxShadow: 3,
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={car.image}
//                 alt={`${car.name} available for rent in Tirupati`}
//                 sx={{ objectFit: 'cover' }}
//               />
//               <CardContent>
//                 <Typography
//                   gutterBottom
//                   variant="h5"
//                   component="h2"
//                   sx={{ fontWeight: 'bold', color: 'primary.main' }}
//                 >
//                   {car.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Rate per Kilometer:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.acRate ? `AC: Rs. ${car.acRate}/-, Non-AC: Rs. ${car.nonAcRate}/-` : `Rs. ${car.rate}/-`}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Max People:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.maxPeople}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Minimum Kilometers:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.minimumKilometers}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Transmission:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.transmission}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Air Conditioned:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.airConditioned}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Driver Allowance:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     Rs. {car.driverAllowance}/-
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Permits:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.permits.join(', ')}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Tolls Included:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.tollsIncluded ? 'Yes' : 'No'}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Parking Included:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.parkingIncluded ? 'Yes' : 'No'}
//                   </Typography>
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//                   <Button size="medium" variant="contained" color="primary" href={`tel:${car.phone}`}>
//                     Book Now
//                   </Button>
//                 </Box>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   );
// };

// export default CarCard;
// import React from 'react';
// import { Card, CardContent, Typography, CardMedia, Button, CardActions, Grid, Box } from '@mui/material';
// import { Helmet } from 'react-helmet';
// import swift from './assets/swift.webp';
// import toyota from './assets/toyota.jpg';
// import hyundai from './assets/hyundai.jpg';
// import etios from './assets/etios.webp';
// import tempo from './assets/tempo.webp';
// import tempo1 from './assets/tempo1.webp';
// import tempo3 from './assets/tempo3.jpg';
// import bus1 from './assets/bus1.avif';
// import bus2 from './assets/bus3.webp';
// import urbania from './assets/urbania.webp';

// const carData = [
// {
//   name: 'Force Urbania',
//   image: urbania,
//   rate: '50',
//   maxPeople: '17',
//   minimumKilometers: 350,
//   transmission: 'Automatic',
//   airConditioned: 'Yes',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Swift Dzire',
//   image: swift,
//   rate: '17',
//   maxPeople: '5',
//   minimumKilometers: 300,
//   transmission: 'Manual',
//   airConditioned: 'Yes',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Toyota Innova',
//   image: toyota,
//   rate: '22',
//   maxPeople: '7',
//   minimumKilometers: 300,
//   transmission: 'Automatic',
//   airConditioned: 'Yes',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Hyundai Creta',
//   image: hyundai,
//   rate: '25',
//   maxPeople: '5',
//   minimumKilometers: 300,
//   transmission: 'Manual',
//   airConditioned: 'Yes',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Etios vehicle',
//   image: etios,
//   rate: '17',
//   maxPeople: '5',
//   minimumKilometers: 300,
//   transmission: 'Manual',
//   airConditioned: 'Yes',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Tempo Traveller 13-seater',
//   image: tempo,
//   rate: '30',
//   maxPeople: '13',
//   minimumKilometers: 300,
//   transmission: 'Manual',
//   airConditioned: 'Yes',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Tempo Traveller 18-seater',
//   image: tempo1,
//   rate: '35',
//   maxPeople: '18',
//   minimumKilometers: 300,
//   transmission: 'Manual',
//   airConditioned: 'Yes',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Tempo Traveller 21-seater',
//   image: tempo3,
//   rate: '40',
//   maxPeople: '21',
//   minimumKilometers: 300,
//   transmission: 'Manual',
//   airConditioned: 'Yes',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Mini Bus 21-seater',
//   image: bus1,
//   rate: '40',
//   maxPeople: '21',
//   minimumKilometers: 300,
//   transmission: 'Manual',
//   airConditioned: 'Yes',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Luxury Bus 21-seater',
//   image: bus2,
//   rate: '40',
//   maxPeople: '21',
//   minimumKilometers: 300,
//   transmission: 'Manual',
//   airConditioned: 'Yes',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Luxury Bus 32-seater',
//   image: bus2,
//   rate: '55',
//   maxPeople: '21',
//   minimumKilometers: 300,
//   transmission: 'Manual',
//   airConditioned: 'Yes',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Luxury Bus 40+1-seater',
//   image: bus2,
//   acRate: '65',
//   nonAcRate: '60',
//   maxPeople: '41',
//   minimumKilometers: 300,
//   transmission: 'Manual',
//   airConditioned: 'Yes/No',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// {
//   name: 'Luxury Bus 50-seater',
//   image: bus2,
//   acRate: '70',
//   nonAcRate: '65',
//   maxPeople: '50',
//   minimumKilometers: 300,
//   transmission: 'Manual',
//   airConditioned: 'Yes/No',
//   driverAllowance: '500',
//   phone: '+91 8885544518',
//   permits: ['Tamilnadu', 'Kerala'],
//   tollsIncluded: true,
//   parkingIncluded: true,
// },
// ];

// const CarCard = () => {
//   return (
//     <>
//       {/* SEO Enhancements */}
//       <Helmet>
//         <title>Car Rentals in Tirupati | TT Travels - Affordable Rentals</title>
//         <meta
//           name="description"
//           content="Explore affordable car rentals in Tirupati with TT Travels. Choose from Swift Dzire, Toyota Innova, Tempo Travellers, and buses for a comfortable journey."
//         />
//         <meta
//           name="keywords"
//           content="car rentals Tirupati, TT Travels, car hire Tirupati, tempo traveller Tirupati, bus rentals Tirupati, affordable travel Tirupati"
//         />
//         <meta name="author" content="TT Travels" />
//         <meta name="robots" content="index, follow" />
//       </Helmet>

//       {/* Schema Markup for Local Business */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "LocalBusiness",
//           "name": "TT Travels",
//           "description":
//             "Affordable car rentals in Tirupati including Swift Dzire, Toyota Innova, and luxury tempos. Perfect for local and outstation trips.",
//           "image": "https://yourwebsite.com/assets/logo.jpg",
//           "telephone": "+91 8885544518",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "Opposite BMR Parking, Kothapalli",
//             "addressLocality": "Tirupati",
//             "addressRegion": "Andhra Pradesh",
//             "postalCode": "517501",
//             "addressCountry": "IN",
//           },
//           "url": "https://yourwebsite.com",
//           "priceRange": "₹₹",
//           "geo": {
//             "@type": "GeoCoordinates",
//             "latitude": "13.6288",
//             "longitude": "79.4192",
//           },
//         })}
//       </script>

//       {/* Car Cards */}
//       <Grid container spacing={4} justifyContent="center">
//         {carData.map((car, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Card
//               sx={{
//                 maxWidth: 345,
//                 margin: 'auto',
//                 borderRadius: 2,
//                 boxShadow: 3,
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={car.image}
//                 alt={`${car.name} available for rent in Tirupati`}
//                 sx={{ objectFit: 'cover' }}
//               />
//               <CardContent>
//                 <Typography
//                   gutterBottom
//                   variant="h5"
//                   component="h2"
//                   sx={{ fontWeight: 'bold', color: 'primary.main' }}
//                 >
//                   {car.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Rate per Kilometer:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.acRate ? `AC: Rs. ${car.acRate}/-, Non-AC: Rs. ${car.nonAcRate}/-` : `Rs. ${car.rate}/-`}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Max People:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.maxPeople}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Minimum Kilometers:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.minimumKilometers}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Transmission:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.transmission}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Air Conditioned:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.airConditioned}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Driver Allowance:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     Rs. {car.driverAllowance}/-
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Permits:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.permits.join(', ')}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Tolls Included:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.tollsIncluded ? 'Yes' : 'No'}
//                   </Typography>
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
//                   Parking Included:
//                   <Typography component="span" sx={{ fontWeight: 'normal' }}>
//                     {' '}
//                     {car.parkingIncluded ? 'Yes' : 'No'}
//                   </Typography>
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//                   <Button size="medium" variant="contained" color="primary" href={`tel:${car.phone}`}>
//                     Book Now
//                   </Button>
//                 </Box>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   );
// };

// export default CarCard;

// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Button,
//   CardActions,
//   Grid,
//   Box,
//   Stack,
// } from "@mui/material";
// import { Helmet } from "react-helmet";
// import AirConditioningIcon from "@mui/icons-material/AcUnit";
// import PeopleIcon from "@mui/icons-material/People";
// import SpeedIcon from "@mui/icons-material/Speed";
// import TollIcon from "@mui/icons-material/LocalParking";
// import swift from "./assets/swift.webp";
// import toyota from "./assets/toyota.jpg";
// import hyundai from "./assets/hyundai.jpg";
// import etios from "./assets/etios.webp";
// import tempo from "./assets/tempo.webp";
// import tempo1 from "./assets/tempo1.webp";
// import tempo3 from "./assets/tempo3.jpg";
// import bus1 from "./assets/bus1.avif";
// import bus2 from "./assets/bus3.webp";
// import urbania from "./assets/urbania.webp";

// const carData = [
//   {
//     name: "Force Urbania",
//     image: urbania,
//     rate: "50",
//     maxPeople: "17",
//     minimumKilometers: 350,
//     transmission: "Automatic",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Swift Dzire",
//     image: swift,
//     rate: "17",
//     maxPeople: "5",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Toyota Innova",
//     image: toyota,
//     rate: "22",
//     maxPeople: "7",
//     minimumKilometers: 300,
//     transmission: "Automatic",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Hyundai Creta",
//     image: hyundai,
//     rate: "25",
//     maxPeople: "5",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Etios vehicle",
//     image: etios,
//     rate: "17",
//     maxPeople: "5",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Tempo Traveller 13-seater",
//     image: tempo,
//     rate: "30",
//     maxPeople: "13",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Tempo Traveller 18-seater",
//     image: tempo1,
//     rate: "35",
//     maxPeople: "18",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Tempo Traveller 21-seater",
//     image: tempo3,
//     rate: "40",
//     maxPeople: "21",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Mini Bus 21-seater",
//     image: bus1,
//     rate: "40",
//     maxPeople: "21",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Luxury Bus 21-seater",
//     image: bus2,
//     rate: "40",
//     maxPeople: "21",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Luxury Bus 32-seater",
//     image: bus2,
//     rate: "55",
//     maxPeople: "21",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Luxury Bus 40+1-seater",
//     image: bus2,
//     acRate: "65",
//     nonAcRate: "60",
//     maxPeople: "41",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes/No",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Luxury Bus 50-seater",
//     image: bus2,
//     acRate: "70",
//     nonAcRate: "65",
//     maxPeople: "50",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes/No",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
// ];

// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Button,
//   CardActions,
//   Grid,
//   Box,
//   Stack,
// } from "@mui/material";
// import { Helmet } from "react-helmet";
// import AirConditioningIcon from "@mui/icons-material/AcUnit";
// import PeopleIcon from "@mui/icons-material/People";
// import SpeedIcon from "@mui/icons-material/Speed";
// import TollIcon from "@mui/icons-material/LocalParking";
// import TransmissionIcon from "@mui/icons-material/Settings";
// import PermitIcon from "@mui/icons-material/Description";
// import PhoneIcon from "@mui/icons-material/Phone";
// import KilometersIcon from "@mui/icons-material/Route";
// import MoneyIcon from "@mui/icons-material/AttachMoney";
// import ParkingIcon from "@mui/icons-material/LocalParking";

// import swift from "./assets/swift.webp";
// import toyota from "./assets/toyota.jpg";
// import hyundai from "./assets/hyundai.jpg";
// import etios from "./assets/etios.webp";
// import tempo from "./assets/tempo.webp";
// import tempo1 from "./assets/tempo1.webp";
// import tempo3 from "./assets/tempo3.jpg";
// import bus1 from "./assets/bus1.avif";
// import bus2 from "./assets/bus3.webp";
// import bus3 from "./assets/luxurybus1.jpg";
// import bus4 from "./assets/luxurybus2.jpg";
// import bus5 from "./assets/luxurybus3.jpg";

// import urbania from "./assets/urbania.webp";

// const carData = [
//   {
//     name: "Force Urbania",
//     image: urbania,
//     rate: "50",
//     maxPeople: "17",
//     minimumKilometers: 350,
//     transmission: "Automatic",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Swift Dzire",
//     image: swift,
//     rate: "17",
//     maxPeople: "5",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Toyota Innova",
//     image: toyota,
//     rate: "22",
//     maxPeople: "7",
//     minimumKilometers: 300,
//     transmission: "Automatic",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Hyundai Creta",
//     image: hyundai,
//     rate: "25",
//     maxPeople: "5",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Etios vehicle",
//     image: etios,
//     rate: "17",
//     maxPeople: "5",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Tempo Traveller 13-seater",
//     image: tempo,
//     rate: "30",
//     maxPeople: "13",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Tempo Traveller 18-seater",
//     image: tempo1,
//     rate: "35",
//     maxPeople: "18",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Tempo Traveller 21-seater",
//     image: tempo3,
//     rate: "40",
//     maxPeople: "21",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Mini Bus 21-seater",
//     image: bus1,
//     rate: "40",
//     maxPeople: "21",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Luxury Bus 21-seater",
//     image: bus2,
//     rate: "40",
//     maxPeople: "21",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Luxury Bus 32-seater",
//     image: bus3,
//     rate: "55",
//     maxPeople: "32",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Luxury Bus 40+1-seater",
//     image: bus4,
//     acRate: "65",
//     nonAcRate: "60",
//     maxPeople: "41",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes/No",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
//   {
//     name: "Luxury Bus 50-seater",
//     image: bus5,
//     acRate: "70",
//     nonAcRate: "65",
//     maxPeople: "50",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes/No",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//   },
// ];

// const CarCard = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Car Rentals in Tirupati | TT Travels - Comprehensive Vehicle Options</title>
//         <meta
//           name="description"
//           content="Explore detailed car rental options in Tirupati with TT Travels. Comprehensive vehicle details for Swift Dzire, Toyota Innova, Tempo Travellers, and buses."
//         />
//       </Helmet>

//       <Grid container spacing={4} justifyContent="center">
//         {carData.map((car, index) => (
//           <Grid item key={index} xs={12} sm={6} md={4}>
//             <Card
//               sx={{
//                 maxWidth: 345,
//                 margin: "auto",
//                 borderRadius: 4,
//                 boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//                 transition: "transform 0.3s",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                 },
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={car.image}
//                 alt={`${car.name} available for rent in Tirupati`}
//                 sx={{
//                   objectFit: "cover",
//                   borderTopLeftRadius: 4,
//                   borderTopRightRadius: 4,
//                 }}
//               />
//               <CardContent>
//                 <Typography
//                   gutterBottom
//                   variant="h5"
//                   component="h2"
//                   sx={{ fontWeight: "bold", color: "primary.main" }}
//                 >
//                   {car.name}
//                 </Typography>
//                 <Stack spacing={1}>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <SpeedIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       Rate per Kilometer: {car.acRate
//                         ? `AC: Rs. ${car.acRate}/-, Non-AC: Rs. ${car.nonAcRate}/-`
//                         : `Rs. ${car.rate}/-`}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <PeopleIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       Max People: {car.maxPeople}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <AirConditioningIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       Air Conditioned: {car.airConditioned}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <TollIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       Tolls Included: {car.tollsIncluded ? "Yes" : "No"}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <TransmissionIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       Transmission: {car.transmission}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <PermitIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       Permits: {car.permits.join(", ")}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <PhoneIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       Contact: {car.phone}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                   <KilometersIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       Minimum Kilometers: {car.minimumKilometers}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                   <MoneyIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       Driver Allowance: Rs. {car.driverAllowance}/-
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                   <ParkingIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       Parking Included: {car.parkingIncluded ? "Yes" : "No"}
//                     </Typography>
//                   </Box>
//                 </Stack>
//               </CardContent>
//               <CardActions>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     width: "100%",
//                   }}
//                 >
//                   <Button
//                     size="medium"
//                     variant="contained"
//                     color="primary"
//                     sx={{ fontWeight: "bold", borderRadius: 2 }}
//                     href={`tel:${car.phone}`}
//                   >
//                     Book Now
//                   </Button>
//                 </Box>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   );
// };

// export default CarCard;

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
  Grid,
  Box,
  Stack,
} from "@mui/material";
import { Helmet } from "react-helmet";
import AirConditioningIcon from "@mui/icons-material/AcUnit";
import PeopleIcon from "@mui/icons-material/People";
import SpeedIcon from "@mui/icons-material/Speed";
import TollIcon from "@mui/icons-material/LocalParking";
import TransmissionIcon from "@mui/icons-material/Settings";
import PermitIcon from "@mui/icons-material/Description";
import PhoneIcon from "@mui/icons-material/Phone";
import KilometersIcon from "@mui/icons-material/Route";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import ParkingIcon from "@mui/icons-material/LocalParking";

import swift from "./assets/swift.webp";
import toyota from "./assets/toyota.jpg";
import hyundai from "./assets/hyundai.jpg";
import etios from "./assets/etios.webp";
import tempo from "./assets/tempo.webp";
import tempo1 from "./assets/tempo1.webp";
import tempo3 from "./assets/tempo3.jpg";
import bus1 from "./assets/bus1.avif";
import bus2 from "./assets/bus3.webp";
import bus3 from "./assets/luxurybus1.jpg";
import bus4 from "./assets/luxurybus2.jpg";
import bus5 from "./assets/luxurybus3.jpg";

import urbania from "./assets/urbania.webp";

const carData = [
  {
    name: "Force Urbania",
    image: urbania,
    rate: "50",
    maxPeople: "17",
    minimumKilometers: 350,
    transmission: "Automatic",
    airConditioned: "Yes",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Swift Dzire",
    image: swift,
    rate: "17",
    maxPeople: "5",
    minimumKilometers: 300,
    transmission: "Manual",
    airConditioned: "Yes",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Toyota Innova",
    image: toyota,
    rate: "22",
    maxPeople: "7",
    minimumKilometers: 300,
    transmission: "Automatic",
    airConditioned: "Yes",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Hyundai Creta",
    image: hyundai,
    rate: "25",
    maxPeople: "5",
    minimumKilometers: 300,
    transmission: "Manual",
    airConditioned: "Yes",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Etios vehicle",
    image: etios,
    rate: "17",
    maxPeople: "5",
    minimumKilometers: 300,
    transmission: "Manual",
    airConditioned: "Yes",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Tempo Traveller 13-seater",
    image: tempo,
    rate: "30",
    maxPeople: "13",
    minimumKilometers: 300,
    transmission: "Manual",
    airConditioned: "Yes",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Tempo Traveller 18-seater",
    image: tempo1,
    rate: "35",
    maxPeople: "18",
    minimumKilometers: 300,
    transmission: "Manual",
    airConditioned: "Yes",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Tempo Traveller 21-seater",
    image: tempo3,
    rate: "40",
    maxPeople: "21",
    minimumKilometers: 300,
    transmission: "Manual",
    airConditioned: "Yes",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Mini Bus 21-seater",
    image: bus1,
    rate: "40",
    maxPeople: "21",
    minimumKilometers: 300,
    transmission: "Manual",
    airConditioned: "Yes",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Luxury Bus 21-seater",
    image: bus2,
    rate: "40",
    maxPeople: "21",
    minimumKilometers: 300,
    transmission: "Manual",
    airConditioned: "Yes",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Luxury Bus 32-seater",
    image: bus3,
    rate: "55",
    maxPeople: "32",
    minimumKilometers: 300,
    transmission: "Manual",
    airConditioned: "Yes",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Luxury Bus 40+1-seater",
    image: bus4,
    acRate: "65",
    nonAcRate: "60",
    maxPeople: "41",
    minimumKilometers: 300,
    transmission: "Manual",
    airConditioned: "Yes/No",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
  {
    name: "Luxury Bus 50-seater",
    image: bus5,
    acRate: "70",
    nonAcRate: "65",
    maxPeople: "50",
    minimumKilometers: 300,
    transmission: "Manual",
    airConditioned: "Yes/No",
    driverAllowance: "500",
    phone: "+91 8885544518",
    permits: ["Tamilnadu", "Kerala"],
    tollsIncluded: true,
    parkingIncluded: true,
  },
];

const CarCard = () => {
  return (
    <>
      <Helmet>
        <title>Car Rentals in Tirupati | TT Travels - Comprehensive Vehicle Options</title>
        <meta
          name="description"
          content="Explore detailed car rental options in Tirupati with TT Travels. Comprehensive vehicle details for Swift Dzire, Toyota Innova, Tempo Travellers, and buses."
        />
      </Helmet>

      <Grid container spacing={4} justifyContent="center">
        {carData.map((car, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                margin: "auto",
                borderRadius: 4,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={car.image}
                alt={`${car.name} available for rent in Tirupati`}
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: "bold", color: "primary.main" }}
                >
                  {car.name}
                </Typography>
                <Stack spacing={1}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <SpeedIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Rate per Kilometer:</strong> {car.acRate
                        ? `AC: Rs. ${car.acRate}/-, Non-AC: Rs. ${car.nonAcRate}/-`
                        : `Rs. ${car.rate}/-`}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PeopleIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Max People:</strong> {car.maxPeople}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <AirConditioningIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Air Conditioned:</strong> {car.airConditioned}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <TollIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Tolls Included:</strong> {car.tollsIncluded ? "Yes" : "No"}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <TransmissionIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Transmission:</strong> {car.transmission}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PermitIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Permits:</strong> {car.permits.join(", ")}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <PhoneIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Contact:</strong> {car.phone}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <KilometersIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Minimum Kilometers:</strong> {car.minimumKilometers}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <MoneyIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Driver Allowance:</strong> Rs. {car.driverAllowance}/-
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <ParkingIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Parking Included:</strong> {car.parkingIncluded ? "Yes" : "No"}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                    sx={{ fontWeight: "bold", borderRadius: 2 }}
                    href={`tel:${car.phone}`}
                  >
                    Book Now
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CarCard;
