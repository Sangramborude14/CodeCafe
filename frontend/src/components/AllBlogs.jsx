import { useState,useEffect } from "react";

export function AllBlogs() {
    const [blogs,setBlogs] = useState([]);
    const [isLoading,setIsLoading] = useState(true);    

    useEffect(() => {
        async function fetchMyData() {
            try{
                const response  = await fetch("http://localhost:8000/api/blog/AllBlogs");
            const data = await response.json();
            setBlogs(data);
            
            }catch(err){
                console.error(`unable to retrive data `,err);
            }finally{
                setIsLoading(false);
            }
        }
        fetchMyData();
    },[])
    
        if(isLoading){
            return <h2>The Blogs are Loading</h2>
        }
    return (<>
            <div>
                <h2>All Blogs</h2>
                {blogs.map((blog) => (
                <div key={blog._id}>
                    <h3>{blog.Title}</h3>
                    <p>{blog.blogContent}</p>
                    <br/>
                    <small>By: <b>{blog.username}</b></small>
                </div>
            ))}
            </div>
            </>)
}