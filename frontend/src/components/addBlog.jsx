
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
            <div id="add-div">
                <h1 className="add-h1">Create new Blog</h1>
                <form onSubmit={handleSubmit}>
                    <label className="add-label">Username: </label>
                    <input className="add-input" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} required /><br></br>
                    
                    <label className="add-label">Title: </label>
                    <input className="add-input" type="text" value={title} onChange={(e) => { setTitle(e.target.value )}} required /><br></br>
                    
                    <label className="add-label">Blog Content: </label>
                    <textarea id="blog-content" value={Content} onChange={(e) => { setContent(e.target.value) }} required></textarea><br></br>
                    
                    <label className="add-label">Privacy: </label>
                    <div className="flex items-center gap-3">
                        <div>
                    <input className="add-input" type="checkbox" checked={isAuthorized} onChange={(e) => { setIsAuthorized(e.target.checked )}} id="isAuthorized" />Public<br></br>
                    <div></div>
                        </div>
                    </div>
                    
                    <button type="submit"id="publish-btn" className="text-fg-brand bg-neutral-primary border border-brand hover:bg-brand hover:text-white focus:ring-4 focus:ring-brand-subtle font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Publish</button>

                </form>
            </div>
        </>
    )
}



