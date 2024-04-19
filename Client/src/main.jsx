import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import { Provider } from "react-redux";
import  { store,persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import NotFound from "./pages/NotFound";
import HomepageVOne from "./pages/HomepageVOne";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import "./styles/font.css";
import "./styles/index.css";
import "./styles/tailwind.css";
import AuthLayout from './components/AuthLayout.jsx';
import App from './App.jsx';
import LoginSignupPage from './pages/Login-signup/index.jsx';
import About from './pages/About/index.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This is your main layout component
    children: [
      { path: "/",
        element: (
        <AuthLayout authentication={false} route={"/"}>
          <HomepageVOne />
        </AuthLayout>
      ) },
      { path: "/productlist", 
        element: (
        <AuthLayout authentication={false} route={"/productlist"}>
          <ProductList />
        </AuthLayout>
        ) },
        {
          path:"/about",
          element: (
            <AuthLayout authentication={false} route={"/about"}>
              <About />
            </AuthLayout>
          ) },
      { path: "/productdetails", 
        element: (
        <AuthLayout authentication={false} route={"/productdetails"}>
          <ProductDetails />
        </AuthLayout>
        ) },
      { path: "/cart", 
        element: (
        <AuthLayout authentication>
          <Cart />
        </AuthLayout>
        ) },
      { path: "/checkout",
        element: (
        <AuthLayout authentication>
          <Checkout />
        </AuthLayout>
        ) },
      { path: "/login",
        element: (
        <AuthLayout authentication={false} route={"/"}>
       <LoginSignupPage/>
       </AuthLayout>
       ) },                  
      { path: "*", element: <NotFound /> },
    ],
    
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <RouterProvider router={router} />
  </PersistGate>
  </Provider>,
)
