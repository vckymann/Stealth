import { useDispatch} from "react-redux";
import API from "../apis/api";
import { useNavigate } from "react-router-dom";
import { getProductDetails } from "../store/slices/productslice";
import { useState } from "react";
import { refreshCartItems } from "../store/slices/cartSlice";
import useAppSelectors from "../store/selectors";


function useProductDetailsPage() {

      
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const { authStatus, userId, selectedProduct, similarProducts, currentPage } = useAppSelectors();


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
        const response = await API.addToCart(userId, selectedProduct.id, productQuantity);
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
    selectedProduct,
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
