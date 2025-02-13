import React, { useState, useEffect } from 'react';
import { FaUserCheck, FaCar, FaUserTie } from 'react-icons/fa';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';

const AnimatedCounter = ({ end, duration = 2000, start = 0 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOutQuad = percentage => 1 - (1 - percentage) * (1 - percentage);
      const currentCount = Math.floor(start + (end - start) * easeOutQuad(percentage));
      
      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, start]);

  return <span>{count.toLocaleString()}</span>;
};

const StatisticsBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box sx={{ background: 'radial-gradient(circle at 10% 20%, rgb(0, 52, 89) 0%, rgb(0, 168, 232) 90%)',color: 'white', p: 2, borderRadius: 2, textAlign: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', gap: 4 }}>
        {/* Happy Customers */}
        <Card sx={{ backgroundColor: 'transparent', color: 'white', flex: 1, textAlign: 'center' }}>
          <CardContent>
            <FaUserCheck size={50} />
            <Typography variant="h4" fontWeight="bold" mt={1}>
              {isVisible && <AnimatedCounter end={100} start={10} />}+
            </Typography>
            <Typography variant="body2" sx={{ textTransform: 'uppercase', mt: 1 }}>Happy Customers</Typography>
          </CardContent>
        </Card>
        
        <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, backgroundColor: 'white' }} />

        {/* Trips Completed */}
        <Card sx={{ backgroundColor: 'transparent', color: 'white', flex: 1, textAlign: 'center' }}>
          <CardContent>
            <FaCar size={50} />
            <Typography variant="h4" fontWeight="bold" mt={1}>
              {isVisible && <AnimatedCounter end={500} start={50} />}+
            </Typography>
            <Typography variant="body2" sx={{ textTransform: 'uppercase', mt: 1 }}>Trips Completed</Typography>
          </CardContent>
        </Card>

        <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, backgroundColor: 'white' }} />
        
        {/* Expert Travel Agents */}
        <Card sx={{ backgroundColor: 'transparent', color: 'white', flex: 1, textAlign: 'center' }}>
          <CardContent>
            <FaUserTie size={50} />
            <Typography variant="h4" fontWeight="bold" mt={1}>
              {isVisible && <AnimatedCounter end={20} start={5} />}+
            </Typography>
            <Typography variant="body2" sx={{ textTransform: 'uppercase', mt: 1 }}>Expert Travel Agents</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default StatisticsBanner;
