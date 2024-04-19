import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Search from '../Search';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../store/authslice';
import { resetCart } from '../../store/cartSlice';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const status = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box className='bg-background text-white h-full' sx={{ width: 250 }} role="presentation">
        <ListItemButton onClick={toggleDrawer(false)}>
            <ListItemText primary="X" />
        </ListItemButton>
        <List>        
        <>        
            <ListItem >        
                <Search />
            </ListItem>
        </>
        </List>
      <Divider />
      <Link to="/cart">
            <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary="My Orders" />
            </ListItemButton>
        </Link>
        <Link to="/">
      <ListItemButton onClick={toggleDrawer(false)}>
          <ListItemText primary="Home" />
      </ListItemButton>
        </Link>
        <Link to="/productlist">
            <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary="Shop" />
            </ListItemButton>
        </Link>
        <Link to="/about">
            <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary="About Us" />
            </ListItemButton>
        </Link>
        {status ? (
        <ListItemButton onClick={() => {
          dispatch(logout());
          dispatch(resetCart());
          toggleDrawer(false);
        }}>
        <ListItemText primary="Logout" />
        </ListItemButton>
        ): (
        <Link to="/login">
        <ListItemButton onClick={toggleDrawer(false)}>
            <ListItemText primary="Login" />
        </ListItemButton>
        </Link>
        )}
      
    </Box>
  );

  return (
    <div className='bg-background border-b-[1px] border-green-500'>
      <Button className='p-2' onClick={toggleDrawer(true)}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-green-500 dark:text-gray-800">
					<rect width="1052" height="30" x="35" y="96"></rect>
					<rect width="1052" height="30" x="35" y="200"></rect>
					<rect width="1052" height="30" x="35" y="310"></rect>
				</svg>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
