import { useState } from 'react'
import { addBlog } from '../components/addBlog' 
import { deleteBlog } from '../components/deleteBlog'
import myBlogComponent from '../components/myBlog'
import './App.css'  
import { NavBar } from '../components/navBar'
import { Home } from '../components/home'

function App() {
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);

  const handleNewBlog = (username,blogContent) => {
    console.log(`new blog created by ${username}`)
    const newBlog = {
      
    }
  }
  return (
    <>
      <div>
        <NavBar/>
        <Home/>
      </div>
    </>
  )
}

export default App
