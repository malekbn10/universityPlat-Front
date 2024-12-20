


import {useEffect} from "react";
import {  Navigate, Outlet, useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const ProtectedRouteAdmin = (props) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  function presentPage() {
    navigate(-1);
  }

  if (!token) return <Navigate to="/login" />;

  useEffect(()=>{
    if(token && jwtDecode(token)["role"]!=="admin"){ 
      presentPage()
      }
  },[token && jwtDecode(token)["role"]!=="admin"])

  const decodedData = jwtDecode(token);


  if (decodedData["role"] === "admin") {
    return <Outlet {...props} />;
  }
 else if(decodedData["role"]!=="admin"){
   presentPage()
  }
};

export default ProtectedRouteAdmin;

