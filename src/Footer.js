import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div>
      {/* About Us Section */}
      <Box
        sx={{
          bgcolor: '#414a4c', // Background color for About Us section
          p: 4, // Padding for the About Us section
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* Left side content */}
              <Typography variant="h4" component="h2" gutterBottom color="white">
                About Us
              </Typography>
              <Typography variant="body1" paragraph color="white">
                We provide the best services for car and bus rentals in Tirupati. Affordable rates, reliable service.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="flex-start">
              {/* Right side contact info */}
              <Typography variant="h6" component="h3" gutterBottom color="white">
                Contact Us
              </Typography>
              <Typography variant="body1" color="white">
                <a href="tel:+919391711883" style={{ color: 'white', textDecoration: 'none' }}>
                  Phone: +91 9391711883
                </a>
              </Typography>
              <Typography variant="body1" color="white">
                <a href="mailto:info@tttravels.com" style={{ color: 'white', textDecoration: 'none' }}>
                  Email: info@tttravels.com
                </a>
              </Typography>
              {/* Social Media Icons */}
              <Box sx={{ mt: 2 }}>
                <IconButton 
                  color="inherit" 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  href="https://www.twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box sx={{ bgcolor: 'primary.main', p: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="white">
          © 2024 TT Travels. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
