import{useState,useEffect,createContext,useContext} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [loading,setisLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/api/auth/status',{credentials: 'include'})
        .then(res => res.json())
        .then(data => setIsLoggedIn(data.isLoggedIn))
        .finally(() => setisLoading(false));
    },[]);

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    return(<AuthContext.Provider value={{isLoggedIn,login,logout,loading}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext);
