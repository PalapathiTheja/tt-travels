import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // List of states and their respective route links
  const states = [
    { name: 'Andhra Pradesh', link: '/temples/andhra-pradesh' },
    { name: 'Tamil Nadu', link: '/temples/tamil-nadu' },
    { name: 'Kerala', link: '/temples/kerala' },
    { name: 'Karnataka', link: '/temples/karnataka' },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}> {/* Use space-between to position elements */}
          <Box
            component="img"
            src={logo} // Use the imported logo image here
            alt="TT Travels Logo"
            sx={{ height: 50 }} // Adjust the height to fit your design
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" component={Link} to="/" sx={{ ml: 2 }}>
              Home
            </Button>
            <Button color="inherit" sx={{ ml: 2 }} onClick={handleOpenDialog}>
              Temples
            </Button>
            <Button color="inherit" component={Link} to="/about" sx={{ ml: 2 }}>
              About Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Dialog for selecting states */}
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
          <List>
            {states.map((state, index) => (
              <ListItem button component={Link} to={state.link} key={index} onClick={handleCloseDialog}>
                <ListItemText primary={state.name} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
