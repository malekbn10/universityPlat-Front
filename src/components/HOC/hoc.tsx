import { jwtDecode } from "jwt-decode";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const user ={
    isCon : false,
    Role : ''
}

export const Hoc = (Component , inRole)=>{
 
   
    const navigate = useNavigate();

    const AuthComponent = (props)=>{
      
        useEffect(()=>{
            const token = localStorage.getItem('token');
           
            if (!token) {
                return navigate('/login');
            }
            try {
                const decodedToken = jwtDecode(token); // Assuming jwtDecode parses the token.
                const userRoles = decodedToken['role'] || []; // Adjust based on your token structure.

                if (!inRole || (inRole && !inRole.some((role) => userRoles.includes(role)))) {
                    return navigate("/"); // Change this to a 404 page if needed.
                }
            } catch (error) {
                console.error("Error decoding token:", error);
                navigate("/login");
            }
        },[navigate]);
        return <Component {...props}/>;
    };
    return AuthComponent;
}