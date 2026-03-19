import { useState } from 'react';

export function AddBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBlog = {
            username: title,
            blogContent: content,
            ContentType: 'Blog'
        };

        try {
            const response = await fetch('http://localhost:8000/api/blog/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBlog)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Blog created successfully:', result);
                alert('Blog added successfully!');
                setTitle('');
                setContent('');
            } else {
                console.error('Failed to create blog');
                alert('Failed to add blog');
            }
        } catch (error) {
            console.error('Connection error:', error);
            alert('Something went wrong. Is your backend running?');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
            <h2>Create a New Blog Entry</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Title (Username):</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ width: '100%', padding: '8px' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        style={{ width: '100%', padding: '8px', minHeight: '100px' }}
                        required
                    ></textarea>
                </div>
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Publish Blog
                </button>
            </form>
        </div>
    );
}

