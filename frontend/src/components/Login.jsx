import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Login() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const {login} = useAuth();
        const navigate = useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault();
            
          

            const newLogin = {
                username,
                password
            }
            try {
                const response = await fetch('http://localhost:8000/api/auth/login',{
                    method:"POST",
                    headers: {'Content-Type': "application/json"},
                    body: JSON.stringify(newLogin),
                    credentials: 'include'                    
                })
                if(response.ok){
                    const result = await response.json();
                    login();
                    console.log("Logged in successfully", result);
                    navigate('/home');
                } else {
                    const errorMsg = await response.json();
                    alert(errorMsg.message || "Login failed");
                }
            
            }catch(err){
                console.error(`some error occured`, err)
                alert("Network error occurred");
            }
        }
        

        return(<>
        <div id="login-div">
            <form onSubmit={handleSubmit}>
            <label className="login-label">Username:</label>
             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="login-input"/><br></br>
            <label className="login-label">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="login-input"/>                
            <button id="login-btn" type="submit">Login</button>
            </form>
        </div>
        </>)
}