import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCartItemsFailure,fetchCartItemsSuccess, updateCartItems, removeCartItems,setTotalPrice } from "../store/cartSlice";
import { logout } from "../store/authslice";
import API from "../apis/api";
  
export function useFetchCart() {

  const userId = useSelector((state) => state.auth.userId);
  const cartItemsFetched = useSelector((state) => state.cart.cartItemsFetched);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!userId) {
      dispatch(logout());
      return;
    } else {
      if(!cartItemsFetched) {
        const GetCartItems = async () => {
          try {
            const data = await API.getCartItems(userId);
            dispatch(fetchCartItemsSuccess(data));
          } catch (error) {
            dispatch(fetchCartItemsFailure(error));
          }
        }
        GetCartItems();
      }
    }
  }, [userId,dispatch,cartItemsFetched,]);
}

function useCartPage() {
  
  const cartId = useSelector((state) => state.auth.cartId);
  const { cartItems, error, loading } = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [editProduct, setEditProduct] = useState(null);
  const [updatedQuantity,  setUpdatedQuantity] = useState({});
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch()
  
  
    useEffect(() => {
      if (cartItems && cartItems.length > 0) {
        const total = cartItems.reduce((acc, item) => acc + parseFloat(item.total), 0);
        dispatch(setTotalPrice(total.toFixed(2)));
      } else {
        dispatch(setTotalPrice(0));
      }
    }, [cartItems, dispatch]);

  const handleUpdateQuantity = (productId, quantity) => {
    setUpdatedQuantity({productId, quantity});
    dispatch(updateCartItems({productId, quantity}));
  };

  const handleConfirm = async () => {
    setDisabled(true);
    await API.updateCartItems(cartId, updatedQuantity.productId, updatedQuantity.quantity);
    dispatch(updateCartItems(updatedQuantity));
    setEditProduct(null);
    setUpdatedQuantity({});
    setDisabled(false);
  }

  const handleDelete = async (productId) => {
    setDisabled(true);
    await API.deleteCartItem(cartId, productId);
    dispatch(removeCartItems(productId));
    setEditProduct(null);
    setDisabled(false);
  }

  const handleEdit = (productId) => {
    setEditProduct(productId);
  }

  return {
    cartItems,
    totalPrice,
    editProduct,
    updatedQuantity,
    error,
    loading,
    disabled,
    handleUpdateQuantity,
    handleConfirm,
    handleDelete,
    handleEdit,
  }
}

export default useCartPage
