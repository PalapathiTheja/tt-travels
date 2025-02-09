// import React from 'react';
// import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import {
//   LocationOn,
//   Phone,
//   Email,
// } from "@mui/icons-material";
// const Footer = () => {
//   return (
//     <div>
//       {/* About Us Section */}
//       <Box
//         sx={{
//           background: 'radial-gradient(circle at 10% 20%, rgb(0, 52, 89) 0%, rgb(0, 168, 232) 90%)', // Radial gradient background
//           p: 4,
//           color: 'white', // Set text color for consistency
//         }}
//       >
//         <Container>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               {/* Left side content */}
//               <Typography variant="h4" component="h2" gutterBottom>
//                 About Us
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 We provide the best services for car and bus rentals in Tirupati. Affordable rates, reliable service.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="flex-start">
//               {/* Right side contact info */}
//               <Typography variant="h6" component="h3" gutterBottom>
//                 Contact Us
//               </Typography>
//               <Grid item xs={12}>
//                 <Box sx={{ display: "flex", alignItems: "center", color: "#fff" }}>
//                 <Phone sx={{ mr: 2 }} />
//               <Typography variant="body1">
//                 <a href="tel:+919391711883" style={{ color: 'white', textDecoration: 'none' }}>
//                   +91 9391711883
//                 </a>
//               </Typography>
//               </Box>
//               </Grid>
//               <br/>
//               <Grid item xs={12}>
//                 <Box sx={{ display: "flex", alignItems: "center", color: "#fff" }}>
//                 <Email sx={{ mr: 2 }} />
//               <Typography variant="body1">
//                 <a href="mailto:info@tttravels.com" style={{ color: 'white', textDecoration: 'none' }}>
//                   info@tttravels.com
//                 </a>
//               </Typography>
//               </Box>
//               </Grid>
//               <br/>
//               <Grid item xs={12}>
//                 <Box sx={{ display: "flex", alignItems: "center", color: "#fff" }}>
//                   <LocationOn sx={{ mr: 2 }} />
//                   <Typography>opposite to BMR Parking, Kothapalli, Tirupati</Typography><br/>
//                 </Box>
//                 <Typography>AndhraPradesh - 517501</Typography>

//               </Grid>
//               {/* Social Media Icons */}
//               <Box sx={{ mt: 2 }}>
//                 <IconButton 
//                   color="inherit" 
//                   href="https://www.facebook.com" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <FacebookIcon />
//                 </IconButton>
//                 <IconButton 
//                   color="inherit" 
//                   href="https://www.twitter.com" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <TwitterIcon />
//                 </IconButton>
//                 <IconButton 
//                   color="inherit" 
//                   href="https://www.instagram.com" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <InstagramIcon />
//                 </IconButton>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Footer Section */}
//       <Box sx={{ 
//         background: 'radial-gradient(circle at 10% 20%, rgb(0, 52, 89) 0%, rgb(0, 168, 232) 90%)', 
//         p: 2, 
//         textAlign: 'center',
//       }}>
//         <Typography variant="body2" color="white">
//           © 2024 TT Travels. All rights reserved.
//         </Typography>
//       </Box>
//     </div>
//   );
// };

// export default Footer;
import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { LocationOn, Phone, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer>
      {/* About Us Section */}
      <Box
        sx={{
          background: 'radial-gradient(circle at 10% 20%, rgb(0, 52, 89) 0%, rgb(0, 168, 232) 90%)',
          p: 4,
          color: 'white',
        }}
        component="section"
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {/* Left side content */}
              <Typography variant="h4" component="h2" gutterBottom>
                About TT Travels
              </Typography>
              <Typography variant="body1" paragraph>
                TT Travels offers top-quality car and bus rental services in Tirupati. We are known for providing affordable rates and reliable service, ensuring a comfortable travel experience for our customers.
              </Typography>
              <Typography variant="body1">
                Whether you're a tourist visiting Tirupati or a resident seeking convenient transportation options, TT Travels has you covered.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="flex-start">
              {/* Right side contact info */}
              <Typography variant="h6" component="h3" gutterBottom>
                Contact Us
              </Typography>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
                  <Phone sx={{ mr: 2 }} />
                  <Typography variant="body1">
                    <a href="tel:+919391711883" style={{ color: 'white', textDecoration: 'none' }}>
                      +91 9391711883
                    </a>
                  </Typography>
                </Box>
              </Grid>
              <br />
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
                  <Email sx={{ mr: 2 }} />
                  <Typography variant="body1">
                    <a href="mailto:info@tttravels.com" style={{ color: 'white', textDecoration: 'none' }}>
                      info@tttravels.com
                    </a>
                  </Typography>
                </Box>
              </Grid>
              <br />
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
                  <LocationOn sx={{ mr: 2 }} />
                  <Typography>
                    Opposite BMR Parking, Kothapalli, Tirupati
                  </Typography>
                </Box>
                <Typography>Andhra Pradesh - 517501</Typography>
              </Grid>

              {/* Social Media Icons */}
              <Box sx={{ mt: 2 }}>
                <IconButton color="inherit" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          background: 'radial-gradient(circle at 10% 20%, rgb(0, 52, 89) 0%, rgb(0, 168, 232) 90%)',
          p: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="white">
          &copy; 2024 TT Travels. All rights reserved. Designed for seamless travel experiences.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
