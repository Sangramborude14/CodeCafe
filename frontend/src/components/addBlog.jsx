
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


export function AddBlog() {
    const [title, setTitle] = useState('');
    const [Content, setContent] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [username,setUsername] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
            const fetchUser = async () => {
                try{
                    const res = await fetch('http://localhost:8000/api/blog/blogs',{method: "GET",credentials: 'include'})
                    if(res.ok){
                        const data = await res.json();
                        setUsername(data.username);
                    }
                }
                catch(err){
                    console.log(`error fetching username`);
                    
                }
            }
            fetchUser();
        },[])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBlog = {
            username: username,
            Title: title,
            blogContent: Content,
            ContentAuth: isAuthorized,
        }
        
       
        try {
            const response = await fetch('http://localhost:8000/api/blog/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBlog),
                credentials: 'include'
            })
            if (response.ok) {
                const result = await response.json();
                console.log(`blog created successfully`, result)
                alert(`Blog Added`);
                navigate("/AllBlogs"); // Correct way to navigate after success

                // setUsername('');
                setContent('');
                setTitle('');
                setIsAuthorized(false);
            }
        }
        catch (err) {
            console.log(`error occured`, err)
            alert(`error connecting to backend`)
        }

    }
    return (
        <>
            <div id="add-div">
                <h1 className="add-h1">Create new Blog</h1>
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
                    
                    <button type="submit" id="publish-btn" className="form-submit-btn">Publish</button>

                </form>
            </div>
        </>
    )
}



