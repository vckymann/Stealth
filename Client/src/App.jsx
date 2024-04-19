import { Outlet } from "react-router-dom";
import { useFetchCart } from "./hooks/cartHook";
import { useProducts } from "./hooks/productListHook";
import ScrollToTopOnPageChange from "./hooks/scrollToTop";
import { useMediaQuery } from "@mui/material";
import Header from "./components/Header";
import TemporaryDrawer from "./components/Navbar";
import { inject } from '@vercel/analytics';import { injectSpeedInsights } from '@vercel/speed-insights';
 


function App() {
  
  const isMobile = useMediaQuery("(max-width: 1024px)"); 
  
  useFetchCart();
  useProducts();
  inject();
  injectSpeedInsights();
  
  return (
    <>
    {isMobile ? <TemporaryDrawer /> : <Header />}
    <ScrollToTopOnPageChange />
    <Outlet />
    </>

  );
}

export default App;
