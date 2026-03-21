import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyBlog = function () {
    const [myBlogs, setMyBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/blog/MyBlog", { 
                    method: "GET", 
                    credentials: 'include' 
                });
                if (response.ok) {
                    const myblogs = await response.json();
                    setMyBlogs(myblogs);
                }
            } catch (err) {
                console.log(`error fetching users blogs`, err);
            }
        }
        fetchBlog();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/blog/deleteBlog/${id}`, {
                method: "POST",
                credentials: "include"
            });
            if (response.ok) {
                setMyBlogs(myBlogs.filter(blog => blog._id !== id));
            } else {
                console.log("Failed to delete blog");
            }
        } catch (err) {
            console.log("error deleting blog", err);
        }
    };

    return (
        <>
            <div className="myblog-div1">
                <h1>My Blogs</h1>
                <div className="myblog-div">
                    {myBlogs.map(blog => (
                        <li key={blog._id} id={blog._id} className="myblog-li">
                            <div>
                                <h1>{blog.Title}</h1>
                                <div>
                                    <button onClick={() => navigate("/editBlog")}>edit</button><br />
                                    <button onClick={() => handleDelete(blog._id)}>delete</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MyBlog;

