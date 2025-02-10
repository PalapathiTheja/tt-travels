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
import ImageCarousel from "./ImageCarousel";

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
        {/* Primary Meta Tags */}
        <title>
          Car Rentals in Tirupati | TT Travels - Comprehensive Vehicle Options
        </title>
        <meta
          name="description"
          content="Explore detailed car rental options in Tirupati with TT Travels. Comprehensive vehicle details for Swift Dzire, Toyota Innova, Tempo Travellers, and buses. Book your ride now for a hassle-free travel experience."
        />
        <meta
          name="keywords"
          content="TT Travels, Car Rentals, Tirupati, Bus Rentals, Van Rentals, Tempo Traveller, Toyota Innova, Swift Dzire, Travel Services, Vehicle Rentals"
        />
        <link rel="canonical" href="https://tttravels.vercel.app/car-rentals" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Car Rentals in Tirupati | TT Travels - Comprehensive Vehicle Options"
        />
        <meta
          property="og:description"
          content="Explore detailed car rental options in Tirupati with TT Travels. Comprehensive vehicle details for Swift Dzire, Toyota Innova, Tempo Travellers, and buses. Book your ride now for a hassle-free travel experience."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tttravels.vercel.app/car-rentals"
        />
        <meta
          property="og:image"
          content="https://tttravels.vercel.app/default-og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Car Rentals in Tirupati | TT Travels - Comprehensive Vehicle Options"
        />
        <meta
          name="twitter:description"
          content="Explore detailed car rental options in Tirupati with TT Travels. Comprehensive vehicle details for Swift Dzire, Toyota Innova, Tempo Travellers, and buses. Book your ride now for a hassle-free travel experience."
        />
        <meta
          name="twitter:image"
          content="https://tttravels.vercel.app/default-og-image.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "TT Travels",
            "image": "https://tttravels.vercel.app/default-og-image.jpg",
            "url": "https://tttravels.vercel.app",
            "telephone": "+91 8885544518",
            "priceRange": "Rs. 17 - 70",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Tirupati",
              "addressRegion": "AP",
              "postalCode": "517501",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "13.6288",
              "longitude": "79.4192"
            },
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 08:00-22:00",
            "description": "TT Travels offers comprehensive vehicle rental services in Tirupati. Choose from buses, vans, cars, and more for a comfortable travel experience."
          }
          `}
        </script>
      </Helmet>
      <Box sx={{ mt: { xs: 2, md: 2 } }}>
        <ImageCarousel />
      </Box>
      <br />

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
                      <strong>Rate per Kilometer:</strong>{" "}
                      {car.acRate
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
                      <strong>Tolls Included:</strong>{" "}
                      {car.tollsIncluded ? "Yes" : "No"}
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
                      <strong>Minimum Kilometers:</strong>{" "}
                      {car.minimumKilometers}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <MoneyIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Driver Allowance:</strong> Rs.{" "}
                      {car.driverAllowance}/-
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <ParkingIcon color="action" />
                    <Typography variant="body2" color="text.secondary">
                      <strong>Parking Included:</strong>{" "}
                      {car.parkingIncluded ? "Yes" : "No"}
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
// import ImageCarousel from "./ImageCarousel";

// const vehicleData = [
//   // Small Vehicles
//   {
//     name: "Tempo Traveller 3+1",
//     seoName: "4 Seater Tempo Traveller Rental in Tirupati",
//     image: tempo,
//     rate: "15",
//     maxPeople: "4",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "tempo-traveller-small",
//     description: "Small 3+1 seater Tempo Traveller rental service in Tirupati with AC, perfect for small families"
//   },
//   {
//     name: "Tempo Traveller 5+1",
//     seoName: "6 Seater Tempo Traveller Rental in Tirupati",
//     image: tempo,
//     rate: "18",
//     maxPeople: "6",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "tempo-traveller-medium",
//     description: "Comfortable 5+1 seater Tempo Traveller rental in Tirupati with AC, ideal for family trips"
//   },
//   {
//     name: "Swift Dzire Sedan",
//     seoName: "5 Seater Swift Dzire Car Rental in Tirupati",
//     image: swift,
//     rate: "17",
//     maxPeople: "5",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "sedan",
//     description: "Comfortable 5 seater Swift Dzire car rental with AC, perfect for local and outstation trips"
//   },
//   {
//     name: "Toyota Innova Crysta",
//     seoName: "7 Seater Toyota Innova Crysta Rental in Tirupati",
//     image: toyota,
//     rate: "22",
//     maxPeople: "7",
//     minimumKilometers: 300,
//     transmission: "Automatic",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "suv",
//     description: "Premium 7 seater Innova Crysta with automatic transmission and AC for comfortable family travel"
//   },
//   {
//     name: "Hyundai Creta SUV",
//     seoName: "5 Seater Hyundai Creta SUV Rental in Tirupati",
//     image: hyundai,
//     rate: "25",
//     maxPeople: "5",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "suv",
//     description: "Stylish 5 seater Creta SUV with AC, perfect for both city and highway drives"
//   },
//   {
//     name: "Toyota Etios",
//     seoName: "5 Seater Toyota Etios Rental in Tirupati",
//     image: etios,
//     rate: "17",
//     maxPeople: "5",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "sedan",
//     description: "Reliable 5 seater Etios with AC, economical choice for family trips"
//   },

//   // Medium Vehicles
//   {
//     name: "Force Urbania Luxury Van",
//     seoName: "17 Seater Force Urbania Luxury Van Rental in Tirupati",
//     image: urbania,
//     rate: "50",
//     maxPeople: "17",
//     minimumKilometers: 350,
//     transmission: "Automatic",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "luxury-van",
//     description: "Premium 17 seater Force Urbania with automatic transmission and luxury features"
//   },
//   {
//     name: "Tempo Traveller 13 Seater",
//     seoName: "13 Seater Tempo Traveller Rental in Tirupati",
//     image: tempo,
//     rate: "30",
//     maxPeople: "13",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "tempo-traveller-large",
//     description: "Spacious 13 seater Tempo Traveller with AC, ideal for group tours"
//   },
//   {
//     name: "Tempo Traveller 18 Seater",
//     seoName: "18 Seater Tempo Traveller Rental in Tirupati",
//     image: tempo1,
//     rate: "35",
//     maxPeople: "18",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "tempo-traveller-large",
//     description: "Comfortable 18 seater Tempo Traveller with AC, perfect for large groups"
//   },

//   // Large Vehicles
//   {
//     name: "Mini Bus 21 Seater",
//     seoName: "21 Seater Mini Bus Rental in Tirupati",
//     image: bus1,
//     rate: "40",
//     maxPeople: "21",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "mini-bus",
//     description: "21 seater Mini Bus with AC, suitable for small to medium groups"
//   },
//   {
//     name: "Luxury Bus 32 Seater",
//     seoName: "32 Seater Luxury Bus Rental in Tirupati",
//     image: bus3,
//     rate: "55",
//     maxPeople: "32",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "luxury-bus",
//     description: "32 seater Luxury Bus with premium amenities, perfect for large group tours"
//   },
//   {
//     name: "Luxury Bus 40+1 Seater",
//     seoName: "41 Seater Luxury Bus Rental Service in Tirupati",
//     image: bus4,
//     acRate: "65",
//     nonAcRate: "60",
//     maxPeople: "41",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes/No",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "luxury-bus",
//     description: "41 seater Luxury Bus available in AC and Non-AC options, ideal for large groups and tours"
//   },
//   {
//     name: "Luxury Bus 50 Seater",
//     seoName: "50 Seater Luxury Bus Rental Service in Tirupati",
//     image: bus5,
//     acRate: "70",
//     nonAcRate: "65",
//     maxPeople: "50",
//     minimumKilometers: 300,
//     transmission: "Manual",
//     airConditioned: "Yes/No",
//     driverAllowance: "500",
//     phone: "+91 8885544518",
//     permits: ["Tamilnadu", "Kerala", "Andhra Pradesh"],
//     tollsIncluded: true,
//     parkingIncluded: true,
//     category: "luxury-bus",
//     description: "50 seater Luxury Bus with AC/Non-AC options, perfect for large groups and corporate tours"
//   }
// ];

// const VehicleRental = () => {
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "VehicleRentalService",
//     "name": "TT Travels Tirupati",
//     "image": "https://tttravels.vercel.app/default-og-image.jpg",
//     "url": "https://tttravels.vercel.app",
//     "telephone": "+91 8885544518",
//     "priceRange": "₹15 - ₹70 per km",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "Your Street Address",
//       "addressLocality": "Tirupati",
//       "addressRegion": "Andhra Pradesh",
//       "postalCode": "517501",
//       "addressCountry": "IN"
//     },
//     "areaServed": ["Tirupati", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
//     "availableVehicleType": vehicleData.map(vehicle => vehicle.category),
//     "hasOfferCatalog": {
//       "@type": "OfferCatalog",
//       "name": "Vehicle Rental Options",
//       "itemListElement": vehicleData.map(vehicle => ({
//         "@type": "Offer",
//         "itemOffered": {
//           "@type": "Vehicle",
//           "name": vehicle.seoName,
//           "seatingCapacity": vehicle.maxPeople
//         },
//         "priceSpecification": {
//           "@type": "PriceSpecification",
//           "price": vehicle.rate || vehicle.acRate,
//           "priceCurrency": "INR",
//           "unitText": "per kilometer"
//         }
//       }))
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Car, Tempo Traveller & Bus Rentals in Tirupati | TT Travels - Best Rates</title>
//         <meta
//           name="description"
//           content="Book AC/Non-AC vehicles in Tirupati - 3+1 to 50 seater options. Swift Dzire, Innova, Creta, Tempo Traveller (4, 6, 13, 17, 21 seater), Luxury buses. Best rates guaranteed for local and outstation trips."
//         />
//         <meta
//           name="keywords"
//           content="car rental Tirupati, tempo traveller Tirupati, bus rental Tirupati, 3+1 seater tempo, 5+1 seater tempo, 17 seater Force Urbania, luxury bus rental, AC vehicle rental Tirupati, outstation taxi Tirupati, Tirupati car booking"
//         />
//         <link rel="canonical" href="https://tttravels.vercel.app/vehicle-rentals" />
        
//         <meta property="og:title" content="Car, Tempo Traveller & Bus Rentals in Tirupati | TT Travels - Best Rates" />
//         <meta property="og:description" content="Book AC/Non-AC vehicles in Tirupati - 3+1 to 50 seater options. Swift Dzire, Innova, Creta, Tempo Traveller (4, 6, 13, 17, 21 seater), Luxury buses. Best rates guaranteed for local and outstation trips." />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://tttravels.vercel.app/vehicle-rentals"
//         />
//         <meta
//           property="og:image"
//           content="https://tttravels.vercel.app/default-og-image.jpg"
//         />

//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Car Rentals in Tirupati | TT Travels - Comprehensive Vehicle Options"
//         />
//         <meta
//           name="twitter:description"
//           content="Explore detailed car rental options in Tirupati with TT Travels. Comprehensive vehicle details for Swift Dzire, Toyota Innova, Tempo Travellers, and buses. Book your ride now for a hassle-free travel experience."
//         />
//         <meta
//           name="twitter:image"
//           content="https://tttravels.vercel.app/default-og-image.jpg"
//         />

//         {/* JSON-LD Structured Data */}
//         <script type="application/ld+json">
//           {`
//           {
//             "@context": "https://schema.org",
//             "@type": "LocalBusiness",
//             "name": "TT Travels",
//             "image": "https://tttravels.vercel.app/default-og-image.jpg",
//             "url": "https://tttravels.vercel.app",
//             "telephone": "+91 8885544518",
//             "priceRange": "Rs. 17 - 70",
//             "address": {
//               "@type": "PostalAddress",
//               "streetAddress": "Your Street Address",
//               "addressLocality": "Tirupati",
//               "addressRegion": "AP",
//               "postalCode": "517501",
//               "addressCountry": "IN"
//             },
//             "geo": {
//               "@type": "GeoCoordinates",
//               "latitude": "13.6288",
//               "longitude": "79.4192"
//             },
//             "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 08:00-22:00",
//             "description": "TT Travels offers comprehensive vehicle rental services in Tirupati. Choose from buses, vans, cars, and more for a comfortable travel experience."
//           }
//           `}
//         </script>
//       </Helmet>
//       <Box sx={{ mt: { xs: 2, md: 2 } }}>
//         <ImageCarousel />
//       </Box>
//       <br />

//       <Grid container spacing={4} justifyContent="center">
//         {vehicleData.map((car, index) => (
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
//                       <strong>Rate per Kilometer:</strong>{" "}
//                       {car.acRate
//                         ? `AC: Rs. ${car.acRate}/-, Non-AC: Rs. ${car.nonAcRate}/-`
//                         : `Rs. ${car.rate}/-`}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <PeopleIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       <strong>Max People:</strong> {car.maxPeople}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <AirConditioningIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       <strong>Air Conditioned:</strong> {car.airConditioned}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <TollIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       <strong>Tolls Included:</strong>{" "}
//                       {car.tollsIncluded ? "Yes" : "No"}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <TransmissionIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       <strong>Transmission:</strong> {car.transmission}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <PermitIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       <strong>Permits:</strong> {car.permits.join(", ")}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <PhoneIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       <strong>Contact:</strong> {car.phone}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <KilometersIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       <strong>Minimum Kilometers:</strong>{" "}
//                       {car.minimumKilometers}
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <MoneyIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       <strong>Driver Allowance:</strong> Rs.{" "}
//                       {car.driverAllowance}/-
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" gap={1}>
//                     <ParkingIcon color="action" />
//                     <Typography variant="body2" color="text.secondary">
//                       <strong>Parking Included:</strong>{" "}
//                       {car.parkingIncluded ? "Yes" : "No"}
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

// export default VehicleRental;
