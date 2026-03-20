import { useState,useEffect } from "react";

export function AllBlogs() {
    const [blogs,setBlogs] = useState([]);
    const [isLoading,setIsLoading] = useState(true);    

    useEffect(() => {
        async function fetchMyData() {
            try{
                const response  = await fetch("http://localhost:8000/api/blog/AllBlogs", {
                    credentials: 'include'
                });
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
            <div id="all-div">
                <h2 id="All-h2">All Blogs</h2>
                {blogs.map((blog) => (
                <div className="allblog-div" key={blog._id}>
                    <h3 id="all-h3">{blog.Title}</h3>
                    <p id="all-p">{blog.blogContent}</p>
                    <br/>
                    <small id="all-small">By: <b>{blog.username}</b></small>
                </div>
            ))}
            </div>
            </>)
}