
import { useDispatch } from "react-redux";
import { login as storeLogin } from "../store/slices/authslice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import API from "../apis/api";
import authService from "../appwrite/auth";
import { userInfo } from "../store/slices/authslice";
import { useNavigate } from "react-router-dom";
function useLogin() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {register, handleSubmit} = useForm();

    
    const [loginError, setLoginError] = useState("");
    const [loading, setLoading] = useState(null);

    const login = async (data) => {
        setLoading(true);
        setLoginError("");
        try {
            const session = await authService.login(data);
            if(session !== "401") {
              const userData = await authService.getCurrentUser();
              if(userData) {
                dispatch(storeLogin(userData));
                const userIds = await API.getuserIdcartId(userData);
                dispatch(userInfo({userId:userIds.user_id,cartId:userIds.cart_id}));
                navigate("/");
              }
            } else {
              setLoginError("Invalid credentials");
            }
          } catch (loginError) {
            setLoginError(
              loginError.message,
              );
            }
            setLoading(false);
        }

  return {
    loginError,
     loading,
     handleSubmit,
     register,
     login,
    }
}

export default useLogin
