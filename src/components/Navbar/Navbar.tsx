import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import FavoriteTable from './FavoriteTable/FavoriteTable';
export interface NavbarProps {}

const Navbar : React.FC<NavbarProps> = () => {
	return (
    <>
    <CustomDialog>
      <FavoriteTable/>
    </CustomDialog>
		<AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Programming with React TS
          </Typography>
        </Toolbar>
      </AppBar>
      </>
	);
};

export default Navbar;
