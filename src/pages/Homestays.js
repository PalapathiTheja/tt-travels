import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import homestayImage1 from "../assets/home3.webp";
import homestayImage2 from "../assets/home2.avif";
import homestayImage3 from "../assets/home1.webp";
import homestay1 from "../assets/homestay1.jpg"
import redstone from "../assets/redstone.jpg"
import keralastay from "../assets/keralastay.jpeg"


const Homestays = () => {
  const homestays = [
    {
      name: "Redstone villas and suites",
      capacity: "Fits 4 Adults",
      meals: "No meals included",
      cancellationPolicy: "Non-Refundable",
      pricePerNight: "₹ 2,500",
      discountedPrice: "₹ 1,950",
      taxes: "₹ 700",
      image: redstone,
    },
    {
      name: "Sree Service Apartments",
      capacity: "Fits 2 Adults",
      meals: "No meals included",
      cancellationPolicy: "Non-Refundable",
      pricePerNight: "₹ 2,999",
      discountedPrice: "₹ 1,999",
      taxes: "₹ 800",
      image: homestayImage1,
    },
    {
      name: "Ushus Homestay",
      capacity: "Fits 4 Adults",
      meals: "No meals included",
      cancellationPolicy: "Non-Refundable",
      pricePerNight: "₹ 3,200",
      discountedPrice: "₹ 2,900",
      taxes: "₹ 700",
      image: keralastay,
    },
    {
      name: "MAHAS Gateway Homestay",
      capacity: "Fits 3 Adults",
      meals: "Breakfast included",
      cancellationPolicy: "Free cancellation",
      pricePerNight: "₹ 2,500",
      discountedPrice: "₹ 1,800",
      taxes: "₹ 500",
      image: homestayImage2,
    },
    {
      name: "Green Valley Homestay",
      capacity: "Fits 4 Adults",
      meals: "No meals included",
      cancellationPolicy: "Non-Refundable",
      pricePerNight: "₹ 3,999",
      discountedPrice: "₹ 2,999",
      taxes: "₹ 700",
      image: homestayImage3,
    },
    {
      name: "Wooden Cottage Villa",
      capacity: "Fits 4 Adults",
      meals: "No meals included",
      cancellationPolicy: "Non-Refundable",
      pricePerNight: "₹ 4,950",
      discountedPrice: "₹ 4,650",
      taxes: "₹ 700",
      image: homestay1,
    },
    
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: '#ff6f00', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
        Homestays
      </Typography>
      <Grid container spacing={4}>
        {homestays.map((homestay, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s',
              '&:hover': { transform: 'scale(1.05)' }
            }}>
              <CardMedia
                component="img"
                alt={homestay.name}
                height="200"
                image={homestay.image}
                sx={{
                  objectFit: 'cover',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.1)' }
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  {homestay.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                  {homestay.capacity}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                  {homestay.meals}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                  {homestay.cancellationPolicy}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#ff6f00', marginBottom: '10px' }}>
                  {homestay.pricePerNight} Per Night
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {homestay.discountedPrice} + {homestay.taxes} taxes & fees
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: '10px', backgroundColor: '#ff6f00' }}
                >
                  BOOK THIS NOW
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Homestays;
