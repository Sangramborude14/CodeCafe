
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export function EditBlog () {
    const [title, setTitle] = useState('');
    const [Content, setContent] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [username,setUsername] = useState('');
    const [id,setId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/api/blog/editBlogs', { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                // Since your backend returns an array from .find(), we take the first blog
                const blog = Array.isArray(data) ? data[0] : data;
                if (blog) {
                    setId(blog._id);
                    setUsername(blog.username);
                    setTitle(blog.Title);
                    setContent(blog.blogContent);
                    setIsAuthorized(blog.ContentAuth);
                }
            })
            .catch(err => console.log("Fetch error:", err));
    }, []); // Only run once on mount


        const handleSubmit = async (e) => {
                e.preventDefault();
             try{
            const response = await fetch(`http://localhost:8000/api/blog/blogs/${id}`,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    Title: title,
                    blogContent: Content,
                    ContentAuth: isAuthorized
                }),
                credentials: 'include'
            })
            if (response.ok){
                console.log(`blog updated`);
                navigate("/AllBlogs");
            }
            }
            catch(err){
            console.log(`updating blog failed`)
            }
        } 
    return(
    <>
            <div id="add-div">
                <h1 className="add-h1">Edit Blog</h1>
                <form onSubmit={handleSubmit}>
                    <label className="add-label">Username: </label>
                    <input className="add-input" type="text" value={username} readOnly required />
                    
                    <label className="add-label">Title: </label>
                    <input className="add-input" type="text" value={title} onChange={(e) => { setTitle(e.target.value )}} required />
                    
                    <label className="add-label">Blog Content: </label>
                    <textarea id="blog-content" value={Content} onChange={(e) => { setContent(e.target.value) }} required></textarea>
                    
                    <label className="add-label">Privacy: </label>
                    <label className="glass-checkbox">
                        <input type="checkbox" checked={isAuthorized} onChange={(e) => { setIsAuthorized(e.target.checked )}} id="isAuthorized" />
                        <span className="checkmark"></span>
                        <span className="label-text">Private</span>
                    </label>
                    
                    <button type="submit" id="publish-btn" className="form-submit-btn">Save</button>

                </form>
            </div>
        </>
    )
}
