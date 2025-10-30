// --- Manage Blog Page ---
import React, { useState, useEffect } from 'react';
import './AdminPages.css'; // Common Admin CSS

const ManageBlog = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Helper function to get token
  const getToken = () => JSON.parse(localStorage.getItem('adminInfo'))?.token;

  // Fetch posts on load
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/api/blog');
      if (!res.ok) throw new Error('Failed to fetch posts');
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle form submit
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) throw new Error('Failed to create post');
      
      setTitle('');
      setContent('');
      fetchPosts(); // List refresh karein
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="admin-card">
        <div className="admin-card-header">
          <h2>Create New Blog Post</h2>
        </div>
        <div className="admin-card-body">
          {error && <p className="error-text">{error}</p>}
          <form className="admin-form" onSubmit={submitHandler}>
            <div className="admin-form-group">
              <label htmlFor="title">Post Title</label>
              <input 
                type="text" 
                id="title"
                className="admin-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="admin-form-group">
              <label htmlFor="content">Post Content (HTML allowed)</label>
              <textarea 
                id="content"
                className="admin-textarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="admin-btn">Publish Post</button>
          </form>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h2>Existing Posts</h2>
        </div>
        <div className="admin-card-body">
          {loading && <p className="loading-text">Loading Posts...</p>}
          <ul className="admin-list">
            {posts.map(post => (
              <li key={post._id} className="admin-list-item">
                <div>
                  <h3>{post.title}</h3>
                  <p>By {post.author || 'Admin'} on {new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
                {/* Delete button (functionality not yet implemented) */}
                <button className="admin-btn btn-danger">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ManageBlog;

