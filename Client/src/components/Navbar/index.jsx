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
import { useState } from 'react';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const status = useSelector((state) => state.auth.status);

  const dispatch = useDispatch();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClick = () => {
    dispatch(logout());
    dispatch(resetCart());
    toggleDrawer(false);
  }

  const DrawerList = (
    <Box className='bg-background text-white h-full' sx={{ width: 250 }} role="presentation">
        <ListItemButton onClick={toggleDrawer(false)}>
            <ListItemText primary="X" />
        </ListItemButton>
        <List>        
        <>        
            <ListItem >        
                <Search onClose={toggleDrawer(false)} />
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
        <ListItemButton onClick={handleClick}>
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
    <div className='bg-background border-b-[1px] border-green-500 sticky top-0 z-10'>
      <Button className='p-2' onClick={toggleDrawer(true)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
