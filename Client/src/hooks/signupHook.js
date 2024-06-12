import { useDispatch } from "react-redux";
import { login as storeLogin } from "../store/slices/authslice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import API from "../apis/api";
import { userInfo } from "../store/slices/authslice";
import { useNavigate } from "react-router-dom";

function useSignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {register, handleSubmit} = useForm();

    
    const [signUpError, setSignUpError] = useState("");
    const [loading, setLoading] = useState(null);

    const SignUp = async (data) => {
      setLoading(true);
      setSignUpError("");
      try {
          const userData = await authService.createAccount(data);
          if(userData) {
              const userDataa = await authService.getCurrentUser();
              if(userDataa) {
                  dispatch(storeLogin(userDataa));                       
                  const userId = await API.createUserCart(userDataa);
                  dispatch(userInfo({userId,cartId:null}));
                  navigate("/");
                }             
          }
    }
         catch (signUpError) {
            setSignUpError(signUpError.message);
        }
        setLoading(false);
    }

  return {
    signUpError,
    loading,
    handleSubmit,
    register,
    SignUp
  }
}

export default useSignUp
