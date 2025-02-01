import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Tab, Tabs } from '@mui/material';

import {NavLink} from 'react-router-dom';


 const Header = () => {

    const [value, setValue] = useState();
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor: 'gray'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LibraryBooksIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Book Store
          </Typography>
          <Tabs
            value={value}
            onChange={(e,val) => setValue(val) }
            textColor="inherit"
            indicatorColor="secondary"
            
            >
        <Tab  LinkComponent={NavLink} to = "/addbook" label="Add Book" />
        <Tab  LinkComponent={NavLink} to = "/about" label="About" />
        <Tab  LinkComponent={NavLink} to = "/books" label="Books" />
        
        </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
