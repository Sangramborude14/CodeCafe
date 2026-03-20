import { Routes, Route } from 'react-router-dom';
import { AddBlog } from '../components/addBlog';
import { AllBlogs } from '../components/AllBlogs';
import { editBlog,deleteBlog } from '../components/editBlog';
import myBlogComponent from '../components/myBlog';

import { NavBar } from '../components/navBar';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { SignUp } from '../components/signup';
import { Logout } from '../components/logout'
import Error404 from '../components/Error404';
import { AuthProvider } from '../context/AuthContext';

function App() {
  return (
    <>
     <AuthProvider>
       <NavBar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/CreateBlogs" element={<AddBlog />} />
           <Route path="/signup" element={<SignUp />} />   
          <Route path="/login" element={<Login />} />    
          <Route path="*" element={<Error404 />} />
          <Route path="/AllBlogs" element={<AllBlogs/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </div> 
      </AuthProvider> 
    </>
  );
}

export default App;
