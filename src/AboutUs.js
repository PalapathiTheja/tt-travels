
// import React from "react";
// import { Helmet } from "react-helmet";
// import { Box, Typography, Container, Grid, Paper } from "@mui/material";
// import {
//   DirectionsCar,
//   DirectionsBus,
//   AirportShuttle,
//   Support,
//   Security,
//   LocalOffer,
// } from "@mui/icons-material";

// const AboutUs = () => {
//   const services = [
//     {
//       title: "Car Rentals",
//       description:
//         "Premium fleet of cars including Swift Dzire, Hyundai Creta, Toyota Innova. Available for local and outstation trips.",
//       vehicles: "Economy Cars, Luxury Sedans, SUVs",
//       features: "24/7 Support, GPS Tracking, Experienced Drivers",
//       icon: <DirectionsCar sx={{ fontSize: 40, color: "#1a237e", mb: 2 }} />,
//     },
//     {
//       title: "Bus Rentals",
//       description:
//         "Modern buses for large groups of 21-50 passengers. Perfect for corporate events, school trips, and tours.",
//       vehicles: "Mini Buses, Luxury Coaches",
//       features: "AC Buses, Push-back Seats, Entertainment Systems",
//       icon: <DirectionsBus sx={{ fontSize: 40, color: "#1a237e", mb: 2 }} />,
//     },
//     {
//       title: "Tempo Traveller",
//       description:
//         "Comfortable 12-18 seater tempo travellers ideal for medium groups and family outings.",
//       vehicles: "12 Seater, 15 Seater, 18 Seater",
//       features: "Air Conditioned, Comfortable Seating, Luggage Space",
//       icon: <AirportShuttle sx={{ fontSize: 40, color: "#1a237e", mb: 2 }} />,
//     },
//   ];

//   const features = [
//     {
//       title: "24/7 Customer Support",
//       description: "Round-the-clock assistance for all your travel needs.",
//       icon: <Support sx={{ fontSize: 36, color: "#1a237e", mb: 2 }} />,
//     },
//     {
//       title: "Experienced Drivers",
//       description: "Professional, well-trained drivers for a safe journey.",
//       icon: <Security sx={{ fontSize: 36, color: "#1a237e", mb: 2 }} />,
//     },
//     {
//       title: "Competitive Pricing",
//       description: "Best rates guaranteed for all our services.",
//       icon: <LocalOffer sx={{ fontSize: 36, color: "#1a237e", mb: 2 }} />,
//     },
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>About TT Travels | Trusted Travel Partner</title>
//         <meta
//           name="description"
//           content="Learn about TT Travels, your trusted partner for car, bus, and tempo traveller rentals. Offering reliable service, experienced drivers, and competitive pricing."
//         />
//       </Helmet>

//       <Box
//         sx={{
//           background: "linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%)",
//           pt: 6,
//           pb: 8,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Box sx={{ textAlign: "center", mb: 6 }}>
//             <Typography
//               variant="h3"
//               sx={{
//                 fontSize: { xs: "2rem", md: "2.5rem" },
//                 fontWeight: "bold",
//                 color: "#1a237e",
//                 mb: 2,
//                 position: "relative",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: "-10px",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   width: "80px",
//                   height: "4px",
//                   backgroundColor: "#303f9f",
//                   borderRadius: "2px",
//                 },
//               }}
//             >
//               About TT Travels
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontSize: "1.1rem",
//                 lineHeight: 1.8,
//                 maxWidth: "800px",
//                 margin: "0 auto",
//                 color: "#424242",
//               }}
//             >
//               TT Travels is your one-stop destination for all transportation
//               needs, offering premium rental services across India. With over 5
//               years of experience, we've built a reputation for reliability,
//               comfort, and customer satisfaction in the travel industry.
//             </Typography>
//           </Box>

//           {/* Services Section */}
//           <Typography
//             variant="h4"
//             sx={{
//               textAlign: "center",
//               color: "#303f9f",
//               fontWeight: "bold",
//               mb: 4,
//             }}
//           >
//             Our Premium Services
//           </Typography>
//           <Grid container spacing={4} sx={{ mb: 6 }}>
//             {services.map((service, index) => (
//               <Grid item xs={12} md={4} key={index}>
//                 <Paper
//                   elevation={3}
//                   sx={{
//                     p: 4,
//                     height: "100%",
//                     borderRadius: 2,
//                     textAlign: "center",
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       transform: "translateY(-8px)",
//                       boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
//                     },
//                   }}
//                 >
//                   {service.icon}
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontWeight: "bold",
//                       color: "#1a237e",
//                       mb: 2,
//                     }}
//                   >
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body1" sx={{ color: "#424242" }}>
//                     {service.description}
//                   </Typography>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//             <br/><br/>
//           {/* Features Section */}
//           <Typography
//             variant="h4"
//             sx={{
//               textAlign: "center",
//               color: "#303f9f",
//               fontWeight: "bold",
//               mb: 4,
//             }}
//           >
//             Why Choose TT Travels?
//           </Typography>
//           <Grid container spacing={4} sx={{ mb: 6 }}>
//             {features.map((feature, index) => (
//               <Grid item xs={12} md={4} key={index}>
//                 <Paper
//                   elevation={2}
//                   sx={{
//                     p: 3,
//                     height: "100%",
//                     textAlign: "center",
//                     borderRadius: 2,
//                     transition: "all 0.3s ease",
//                     "&:hover": {
//                       transform: "translateY(-5px)",
//                       boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
//                     },
//                   }}
//                 >
//                   {feature.icon}
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontWeight: "bold",
//                       color: "#1a237e",
//                       mb: 2,
//                     }}
//                   >
//                     {feature.title}
//                   </Typography>
//                   <Typography variant="body1" sx={{ color: "#424242" }}>
//                     {feature.description}
//                   </Typography>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default AboutUs;

import React from "react";
import { Helmet } from "react-helmet";
import { Box, Typography, Container, Grid, Paper, Link } from "@mui/material";
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
        <title>About TT Travels | Trusted Travel Partner in Tirupati</title>
        <meta
          name="description"
          content="Learn about TT Travels, your trusted partner for car, bus, and tempo traveller rentals in Tirupati. Offering reliable service, experienced drivers, and competitive pricing."
        />
        <meta
          name="keywords"
          content="Tirupati car rentals, bus rentals, tempo traveller services, affordable travel, TT Travels Tirupati, group travel services"
        />
        <meta name="author" content="TT Travels" />
        <meta property="og:title" content="About TT Travels | Trusted Travel Partner" />
        <meta
          property="og:description"
          content="Discover premium travel services by TT Travels, offering reliable car, bus, and tempo traveller rentals in Tirupati."
        />
        <meta property="og:url" content="https://tttravels.com/about-us" />
        <meta property="og:type" content="website" />
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
              needs, offering premium rental services across Tirupati and beyond.
              With over 5 years of experience, we've built a reputation for
              reliability, comfort, and customer satisfaction in the travel industry.
              <br /><br />
              <Link href="/services" sx={{ textDecoration: "none", color: "#1a237e" }}>
                Explore Our Services
              </Link>
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
