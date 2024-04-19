import { useDispatch, useSelector } from "react-redux";
import API from "../apis/api";
import { useNavigate } from "react-router-dom";
import { getProductDetails } from "../store/productslice";
import { useState } from "react";
import { refreshCartItems } from "../store/cartSlice";


function useProductDetailsPage() {

      
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const userId = useSelector((state) => state.auth.userId);
  const authStatus = useSelector((state) => state.auth.status);
  const product = useSelector((state) => state.products.selectedProduct);
  const similarProducts = useSelector((state) => state.products.similarProducts); 
  const currentPage = useSelector((state) => state.products.currentPage);


  const [productQuantity, setProductQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [AddToCartError, setAddToCartError] = useState(null);
  const [addToCartSuccess, setAddToCartSuccess] = useState(null);
  
  
  const addItemToCart = async () => {
    setLoading(true);
    try {
      if(userId === null) {
        setLoading(false);
        setAddToCartError("There has been an error. Please login again to add item to cart");
      }
        const response = await API.addToCart(userId, product.id, productQuantity);
        if(response.success) {
          setLoading(false);
          setAddToCartSuccess(response.message);
        } else {
          setLoading(false);
          setAddToCartError(response.message);
        }
        setProductQuantity(1);
    } catch {
      setLoading(false);
      setAddToCartError("Something went wrong please try again");                  
    }
  }
  
  const handleViewDetailsBtn = (id) => {
    dispatch(getProductDetails(id));
    navigate("/productdetails");
    window.scrollTo(0, 0);
  }
  
  const handleAddToCartBtn = async () => {
    if(authStatus) {
      await addItemToCart();
      dispatch(refreshCartItems());
    } else {
      navigate("/login");
    }
  }
  if(AddToCartError !== null || addToCartSuccess !== null) {
    setTimeout(() => {
      setAddToCartError(null);
      setAddToCartSuccess(null);
    }, 3000);
  }

  return {
    product,
    similarProducts,
    productQuantity,
    setProductQuantity,
    loading,
    AddToCartError,
    addToCartSuccess,
    handleViewDetailsBtn,
    handleAddToCartBtn,
    currentPage
  }
}

export default useProductDetailsPage
