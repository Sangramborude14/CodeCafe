
import { useState } from "react";

export function AddBlog() {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [Content, setContent] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);

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

                setUsername('');
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
            <div>
                <h1 className="">Create new Blog</h1>
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} required /><br></br>
                    
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value )}} required /><br></br>
                    
                    <label>Blog Content: </label>
                    <input type="text" value={Content} onChange={(e) => { setContent(e.target.value) }} required /><br></br>
                    
                    <label>Privacy: </label>
                    <input type="checkbox" checked={isAuthorized} onChange={(e) => { setIsAuthorized(e.target.checked )}} id="isAuthorized" />Public<br></br>
                    
                    <button type="submit">Publish</button>

                </form>
            </div>
        </>
    )
}



