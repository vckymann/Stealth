/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppSelectors from "../store/selectors";


function AuthLayout({
    authentication = true,
    children,
    route
}) {

    const navigate = useNavigate();

    const { authStatus } = useAppSelectors();
    
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate(route);
        }
        setLoader(false);
    }, [authStatus, authentication, navigate, route]);



  return (
    loader ? <h1>Loading...</h1> : <>{children}</>
  )
}

export default AuthLayout;
