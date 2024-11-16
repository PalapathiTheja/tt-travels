// import React from 'react';
// import { Box, Typography, Container } from '@mui/material';

// const AboutUs = () => {
//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         About TT Travels
//       </Typography>
//       <Typography variant="body1" paragraph>
//         Welcome to TT Travels! We are your trusted partner for rental services, providing a variety of vehicles to meet your transportation needs.
//       </Typography>
//       <Typography variant="h6" gutterBottom>
//         Our Services:
//       </Typography>
//       <Box sx={{ mb: 2 }}>
//         <Typography variant="body1">
//           <strong>Car Rentals:</strong> We offer a range of cars from economy to luxury vehicles like Swift Dzire, Hyundai Creta, and Toyota Innova. All cars are well-maintained and available for both short and long journeys.
//         </Typography>
//       </Box>
//       <Box sx={{ mb: 2 }}>
//         <Typography variant="body1">
//           <strong>Bus Rentals:</strong> Need to transport a larger group? Our fleet of buses can accommodate from 21 to 50 passengers, ensuring comfort and convenience for any trip or occasion.
//         </Typography>
//       </Box>
//       <Box sx={{ mb: 2 }}>
//         <Typography variant="body1">
//           <strong>Tempo Rentals:</strong> For mid-size groups, our Tempo Traveller services are perfect, offering seating for 12-18 people with all the modern amenities.
//         </Typography>
//       </Box>
//       <Typography variant="body1">
//         Whether you're planning a family vacation, corporate event, or group tour, TT Travels is here to provide reliable, comfortable, and affordable rental services.
//       </Typography>
//     </Container>
//   );
// };

// export default AboutUs;
// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { Box, Typography, Container, Grid } from '@mui/material';
// import { LocationOn, Phone, Email } from '@mui/icons-material';

// const AboutUs = () => {
//   // Company information for structured data
//   const companyData = {
//     "@context": "https://schema.org",
//     "@type": "TravelAgency",
//     "name": "TT Travels",
//     "description": "Premier vehicle rental service in India offering cars, buses, and tempo travelers for all your transportation needs. Specialized in corporate travel, family trips, and group tours.",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "Your Street Address",
//       "addressLocality": "Your City",
//       "addressRegion": "Your State",
//       "postalCode": "Your Postal Code",
//       "addressCountry": "IN"
//     },
//     "telephone": "+91-8885544518",
//     "email": "info@tttravels.com",
//     "url": "https://tt-travelswebsite.vercel.app",
//     "sameAs": [
//       "https://facebook.com/tttravels",
//       "https://instagram.com/tttravels",
//       "https://linkedin.com/company/tttravels"
//     ],
//     "openingHours": "Mo-Su 00:00-23:59",
//     "priceRange": "₹₹",
//     "areaServed": "India"
//   };

//   const services = [
//     {
//       title: "Car Rentals",
//       description: "Premium fleet of cars including Swift Dzire, Hyundai Creta, Toyota Innova. Available for local and outstation trips.",
//       vehicles: "Economy Cars, Luxury Sedans, SUVs",
//       features: "24/7 Support, GPS Tracking, Experienced Drivers"
//     },
//     {
//       title: "Bus Rentals",
//       description: "Modern buses for large groups of 21-50 passengers. Perfect for corporate events, school trips, and tours.",
//       vehicles: "Mini Buses, Luxury Coaches",
//       features: "AC Buses, Push-back Seats, Entertainment Systems"
//     },
//     {
//       title: "Tempo Traveller",
//       description: "Comfortable 12-18 seater tempo travellers ideal for medium groups and family outings.",
//       vehicles: "12 Seater, 15 Seater, 18 Seater",
//       features: "Air Conditioned, Comfortable Seating, Luggage Space"
//     }
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>About TT Travels - Premier Vehicle Rental Service in India | Car, Bus & Tempo Rental</title>
//         <meta name="description" content="TT Travels offers premium car, bus & tempo traveller rental services across India. Choose from Swift Dzire, Innova, AC buses & more. Best rates for corporate & family trips." />
//         <meta name="keywords" content="TT Travels, car rental service, bus rental, tempo traveller hire, vehicle rental india, corporate travel service, family trip rentals, outstation car rental, luxury car hire, AC bus rental" />
        
//         <meta property="og:title" content="TT Travels - Leading Vehicle Rental Service Provider in India" />
//         <meta property="og:description" content="Premium car, bus & tempo traveller rental services for corporate events, family trips & group tours. Available 24/7 with experienced drivers." />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.tttravels.com/about" />
        
//         <link rel="canonical" href="https://www.tttravels.com/about" />
        
//         <script type="application/ld+json">
//           {JSON.stringify(companyData)}
//         </script>
//       </Helmet>

//       <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
//         <Typography variant="h1" sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 3, color: '#1a237e' }}>
//           About TT Travels - Your Trusted Travel Partner
//         </Typography>

//         <Box sx={{ mb: 4 }}>
//           <Typography variant="h2" sx={{ fontSize: '1.8rem', mb: 2, color: '#303f9f' }}>
//             Welcome to India's Premier Vehicle Rental Service
//           </Typography>
//           <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
//             TT Travels is your one-stop destination for all transportation needs, offering premium rental services across India. With over 5 years of experience, we've built a reputation for reliability, comfort, and customer satisfaction in the travel industry.
//           </Typography>
//         </Box>

//         <Typography variant="h2" sx={{ fontSize: '1.8rem', mb: 3, color: '#303f9f' }}>
//           Our Premium Services
//         </Typography>

//         <Grid container spacing={4} sx={{ mb: 4 }}>
//           {services.map((service, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <Box sx={{ 
//                 p: 3, 
//                 height: '100%',
//                 borderRadius: 2,
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                 '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s' }
//               }}>
//                 <Typography variant="h3" sx={{ fontSize: '1.4rem', mb: 2, color: '#1a237e' }}>
//                   {service.title}
//                 </Typography>
//                 <Typography variant="body1" paragraph>
//                   {service.description}
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 1, color: '#666' }}>
//                   <strong>Available Vehicles:</strong> {service.vehicles}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: '#666' }}>
//                   <strong>Features:</strong> {service.features}
//                 </Typography>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={{ mb: 4 }}>
//           <Typography variant="h2" sx={{ fontSize: '1.8rem', mb: 3, color: '#303f9f' }}>
//             Why Choose TT Travels?
//           </Typography>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ p: 2 }}>
//                 <Typography variant="h4" sx={{ fontSize: '1.2rem', mb: 1 }}>
//                   24/7 Customer Support
//                 </Typography>
//                 <Typography variant="body1">
//                   Round-the-clock assistance for all your travel needs.
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ p: 2 }}>
//                 <Typography variant="h4" sx={{ fontSize: '1.2rem', mb: 1 }}>
//                   Experienced Drivers
//                 </Typography>
//                 <Typography variant="body1">
//                   Professional, well-trained drivers for a safe journey.
//                 </Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ p: 2 }}>
//                 <Typography variant="h4" sx={{ fontSize: '1.2rem', mb: 1 }}>
//                   Competitive Pricing
//                 </Typography>
//                 <Typography variant="body1">
//                   Best rates guaranteed for all our services.
//                 </Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>

//         <Box sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
//           <Typography variant="h2" sx={{ fontSize: '1.8rem', mb: 3, color: '#303f9f' }}>
//             Contact Information
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                 <LocationOn sx={{ mr: 1, color: '#1a237e' }} />
//                 <Typography variant="body1">opposite to BMR Parking, Kothapalli, Tirupati, Andhra Pradesh 517501</Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                 <Phone sx={{ mr: 1, color: '#1a237e' }} />
//                 <Typography variant="body1">+91-8885544518</Typography>
//               </Box>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                 <Email sx={{ mr: 1, color: '#1a237e' }} />
//                 <Typography variant="body1">info@tttravels.com</Typography>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default AboutUs;

import React from "react";
import { Helmet } from "react-helmet";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import {
  DirectionsCar,
  DirectionsBus,
  AirportShuttle,
  Support,
  Security,
  LocalOffer,
} from "@mui/icons-material";

const AboutUs = () => {
  const services = [
    {
      title: "Car Rentals",
      description:
        "Premium fleet of cars including Swift Dzire, Hyundai Creta, Toyota Innova. Available for local and outstation trips.",
      vehicles: "Economy Cars, Luxury Sedans, SUVs",
      features: "24/7 Support, GPS Tracking, Experienced Drivers",
      icon: <DirectionsCar sx={{ fontSize: 40, color: "#1a237e", mb: 2 }} />,
    },
    {
      title: "Bus Rentals",
      description:
        "Modern buses for large groups of 21-50 passengers. Perfect for corporate events, school trips, and tours.",
      vehicles: "Mini Buses, Luxury Coaches",
      features: "AC Buses, Push-back Seats, Entertainment Systems",
      icon: <DirectionsBus sx={{ fontSize: 40, color: "#1a237e", mb: 2 }} />,
    },
    {
      title: "Tempo Traveller",
      description:
        "Comfortable 12-18 seater tempo travellers ideal for medium groups and family outings.",
      vehicles: "12 Seater, 15 Seater, 18 Seater",
      features: "Air Conditioned, Comfortable Seating, Luggage Space",
      icon: <AirportShuttle sx={{ fontSize: 40, color: "#1a237e", mb: 2 }} />,
    },
  ];

  const features = [
    {
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for all your travel needs.",
      icon: <Support sx={{ fontSize: 36, color: "#1a237e", mb: 2 }} />,
    },
    {
      title: "Experienced Drivers",
      description: "Professional, well-trained drivers for a safe journey.",
      icon: <Security sx={{ fontSize: 36, color: "#1a237e", mb: 2 }} />,
    },
    {
      title: "Competitive Pricing",
      description: "Best rates guaranteed for all our services.",
      icon: <LocalOffer sx={{ fontSize: 36, color: "#1a237e", mb: 2 }} />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>About TT Travels | Trusted Travel Partner</title>
        <meta
          name="description"
          content="Learn about TT Travels, your trusted partner for car, bus, and tempo traveller rentals. Offering reliable service, experienced drivers, and competitive pricing."
        />
      </Helmet>

      <Box
        sx={{
          background: "linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%)",
          pt: 6,
          pb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                color: "#1a237e",
                mb: 2,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  backgroundColor: "#303f9f",
                  borderRadius: "2px",
                },
              }}
            >
              About TT Travels
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                maxWidth: "800px",
                margin: "0 auto",
                color: "#424242",
              }}
            >
              TT Travels is your one-stop destination for all transportation
              needs, offering premium rental services across India. With over 5
              years of experience, we've built a reputation for reliability,
              comfort, and customer satisfaction in the travel industry.
            </Typography>
          </Box>

          {/* Services Section */}
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: "#303f9f",
              fontWeight: "bold",
              mb: 4,
            }}
          >
            Our Premium Services
          </Typography>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 2,
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  {service.icon}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#1a237e",
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#424242" }}>
                    {service.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
            <br/><br/>
          {/* Features Section */}
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: "#303f9f",
              fontWeight: "bold",
              mb: 4,
            }}
          >
            Why Choose TT Travels?
          </Typography>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: "100%",
                    textAlign: "center",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  {feature.icon}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#1a237e",
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#424242" }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
