import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './assets/ttTravels.png';

const Header = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:960px)');

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const navigationLinks = [
    { name: 'Home', link: '/' },
    { name: 'Homestays', link: '/homestays' },
    { name: 'Temples', action: handleOpenDialog },
    { name: 'About Us', link: '/about' },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: 'radial-gradient(circle at 10% 20%, rgb(0, 52, 89) 0%, rgb(0, 168, 232) 90%)',
          color: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={logo}
              alt="TT Travels Logo"
              sx={{ height: 50, mr: 1 }}
            />
          </Box>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    width: 250,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                    bgcolor: '#fff',
                  }}
                  role="presentation"
                >
                  <IconButton onClick={toggleDrawer(false)} sx={{ alignSelf: 'flex-end' }}>
                    <CloseIcon />
                  </IconButton>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mt: 2 }}>
                    {navigationLinks.map((navItem, index) => (
                      <Button
                        key={index}
                        component={navItem.link ? Link : 'button'}
                        to={navItem.link || undefined}
                        onClick={navItem.action || toggleDrawer(false)}
                        sx={{
                          color: '#4CAF50',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          textAlign: 'left',
                          py: 1,
                          px: 2,
                          '&:hover': { color: '#388E3C' },
                          width: '100%',
                        }}
                      >
                        {navItem.name}
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navigationLinks.map((navItem, index) => (
                <Button
                  key={index}
                  color="inherit"
                  component={navItem.link ? Link : 'button'}
                  to={navItem.link || undefined}
                  onClick={navItem.action || undefined}
                  sx={{
                    ml: 2,
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    '&:hover': {
                      color: '#FFD54F',
                      transform: 'scale(1.05)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  {navItem.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>
          Select a State
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box>
            {['Andhra Pradesh', 'Tamil Nadu', 'Kerala', 'Karnataka'].map((state, index) => (
              <Button
                key={index}
                component={Link}
                to={`/temples/${state.toLowerCase().replace(' ', '-')}`}
                onClick={handleCloseDialog}
                sx={{
                  display: 'block',
                  color: '#00796B',
                  width: '100%',
                  textAlign: 'left',
                  py: 1,
                  '&:hover': { color: '#004D40' },
                }}
              >
                {state}
              </Button>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
