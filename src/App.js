import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Header from './Header'
import CarCard from './CarCard';
import AboutUs from './AboutUs'; // Import the AboutUs component
import Footer from './Footer';
import { Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Andhrapradesh from './pages/Andhrapradesh'
import Tamilnadu from './pages/TamilNadu';
import KeralaTemples from './pages/Kerala';
import KarnatakaTemples from './pages/Karnataka';
import Homestays from './pages/Homestays';

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <Container>
          <Routes>
            {/* Home Route showing Car Cards */}
            <Route path="/" element={<CarCard />} />
            {/* About Us Route */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/homestays" element={<Homestays />} />
            <Route path="/temples/andhra-pradesh" element={<Andhrapradesh />} /> {/* Andhra Pradesh route */}
            <Route path="/temples/tamil-nadu" element={<Tamilnadu />} /> 
            <Route path="/temples/kerala" element={<KeralaTemples />} /> 
            <Route path="/temples/karnataka" element={<KarnatakaTemples />} /> 

          </Routes>
        </Container>
        {/* Footer */}
        <br/><br/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
