import { Outlet, useLocation } from "react-router-dom";
import { useFetchCart } from "./hooks/cartHook";
import { useProducts } from "./hooks/productListHook";
import ScrollToTopOnPageChange from "./hooks/scrollToTop";
import { useMediaQuery } from "@mui/material";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { inject } from "@vercel/analytics";


function App() {
  
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const location = useLocation();

  const isCheckoutPage = location.pathname === "/checkout";
  
  useFetchCart();
  useProducts();
  inject();
  
  return (
    <>
    {!isCheckoutPage && (isMobile ? <Navbar /> : <Header />)}
    <ScrollToTopOnPageChange />
    <Outlet />
    </>

  );
}

export default App;
