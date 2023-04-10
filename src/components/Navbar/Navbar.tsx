import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import FavoriteTable from './FavoriteTable/FavoriteTable';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
export interface NavbarProps {}

const Navbar : React.FC<NavbarProps> = () => {

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true
  }

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
          <Button variant="outlined" color="secondary" onClick={handleClick} >Open Favorites</Button>
        </Toolbar>
      </AppBar>
      </>
	);
};

export default Navbar;
