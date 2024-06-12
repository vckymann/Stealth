import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {fetchCartItemsFailure,fetchCartItemsSuccess, updateCartItems, removeCartItems,setTotalPrice } from "../store/slices/cartSlice";
import { logout } from "../store/slices/authslice";
import API from "../apis/api";
import useAppSelectors from "../store/selectors";
  
export function useFetchCart() {

  const { userId, cartItemsFetched } = useAppSelectors();

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
  
  const { cartId, cartItems, cartError, cartLoading, totalPrice } = useAppSelectors();

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
    cartError,
    cartLoading,
    disabled,
    handleUpdateQuantity,
    handleConfirm,
    handleDelete,
    handleEdit,
  }
}

export default useCartPage
