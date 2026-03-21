import { Routes, Route, Navigate } from 'react-router-dom';
import { AddBlog } from '../components/addBlog';
import { AllBlogs } from '../components/AllBlogs';
import { EditBlog } from '../components/editBlog';
import MyBlog from '../components/myBlog';
import { Settings } from '../components/Settings';

import { NavBar } from '../components/navBar';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { SignUp } from '../components/signup';
import { Logout } from '../components/logout'
import Error404 from '../components/Error404';
import { AuthProvider, useAuth } from '../context/AuthContext';


const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();
  if (loading) return null;
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            
              <Route path="/CreateBlogs" element={<ProtectedRoute><AddBlog /></ProtectedRoute>} />
              <Route path="/AllBlogs" element={<ProtectedRoute><AllBlogs /></ProtectedRoute>} />
              <Route path="/editBlog" element={<ProtectedRoute><EditBlog/></ProtectedRoute>}/>
              <Route path='/MyBlog' element={<ProtectedRoute><MyBlog/></ProtectedRoute>}/>
              <Route path='/Settings' element={<ProtectedRoute><Settings/></ProtectedRoute>}/>
          
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
