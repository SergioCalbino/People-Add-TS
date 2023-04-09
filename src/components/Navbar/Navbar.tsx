import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
export interface NavbarProps {}

const Navbar : React.FC<NavbarProps> = () => {
	return (
		<AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Programming with React TS
          </Typography>
        </Toolbar>
      </AppBar>
	);
};

export default Navbar;
