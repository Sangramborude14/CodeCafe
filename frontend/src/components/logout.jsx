import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export function Logout() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    
    useEffect(() => {
        const performLogout = async () => {
            try{
                 const response = await fetch("http://localhost:8000/api/auth/logout",{method: 'POST',credentials: 'include'});
                if(response.ok){
                    console.log(`logged out successfully`);
                    logout();
                    navigate("/home");
                }
            }
            catch(err){
                console.error(`error in logging out`);
            }
        }
       performLogout();
    }, [navigate, logout]);
    
    return(<><h1>logged out successfully return to home</h1></>)
}