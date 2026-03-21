import { useState } from "react";

const MyBlog =  function myBlog () {
    const [myBlogs,setMyBlogs] = useState('');

    return(
        <>
        <div>
            <h1>My Blogs</h1>
        </div>
        </>
    )
}
export default MyBlog;
