import { Routes, Route } from 'react-router-dom';
import { AddBlog } from '../components/addBlog';
import { AllBlogs } from '../components/AllBlogs';
import { editBlog,deleteBlog } from '../components/editBlog';
import myBlogComponent from '../components/myBlog';
import './App.css';
import { NavBar } from '../components/navBar';
import { Home } from '../components/home';
import Error404 from '../components/Error404';

function App() {
  return (
    <>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/CreateBlogs" element={<AddBlog />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/AllBlogs" element={<AllBlogs/>}/>
        </Routes>
      </div>  
    </>
  );
}

export default App;
