import { Button, Img, Text } from "./..";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authslice";
import { resetCart } from "../../store/cartSlice";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Search from "../Search";

export default function Header() {
  const status = useSelector((state) => state.auth.status);
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();

  return (
    <div className="flex bg-background text-white justify-between items-center w-full font-poppins p-[17px] max-w-[102rem] mx-auto">
      <ul className="flex justify-around items-center">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-xl px-4 font-bold text-green-500 underline underline-offset-[10px]" : "text-xl px-4 hover:underline underline-offset-[10px] decoration-green-500")}>
          <li className="">Home</li>
        </NavLink>
        <NavLink to="/productlist" className={({ isActive }) => (isActive ? "text-xl px-4 font-bold text-green-500 underline underline-offset-[10px]" : "text-xl px-4 hover:underline underline-offset-[10px] decoration-green-500")}>
          <li className="">Shop</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-xl px-4 font-bold text-green-500 underline underline-offset-[10px]" : "text-xl px-4 hover:underline underline-offset-[10px] decoration-green-500")}>
          <li className="">About</li>
        </NavLink>        
      </ul>
      <Search className="bg-background" />
      <div className="flex justify-around items-center">
        <div>
        {status ?
                <Button onClick={() => {
                  dispatch(logout());
                  dispatch(resetCart());
                }} size="5xl" shape="square" className="font-bold mr-4">
                  <LogoutIcon sx={{ fontSize: 30, marginTop: 0.3 }} />
                 </Button> 
                : 
                <Link to="/login">
                  <PersonIcon sx={{ fontSize: 30, marginRight: 3, marginTop: 0.3 }} />
                </Link> }
          <Button />
        </div>
        <Link className="relative" to="/cart">
          {count > 0 && <Text className="flex justify-center items-center absolute bg-green-500 text-black font-medium h-5 w-5 rounded-full pt-[4px] top-[-7px] right-[28px] text-[13.5px]">{count}</Text>}
        <Img className={"mr-8 w-[30px]"} src="images/img_cart_white_a700.svg" />
        </Link>
      </div>
    </div>
  );
}
