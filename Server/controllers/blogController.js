// --- Logic for Blog Routes ---
const Blog = require('../models/Blog');

// @desc    Get all blog posts
// @access  Public
exports.getBlogPosts = async (req, res) => {
    try {
        const posts = await Blog.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        // Log the full error to the server console for debugging
        console.error('Error fetching blog posts:', err.message); 
        res.status(500).send('Server Error: Failed to retrieve posts.');
    }
};

// @desc    Create a new blog post
// @access  Private (Admin)
exports.createBlogPost = async (req, res) => {
    try {
        const newPost = new Blog({
            title: req.body.title,
            content: req.body.content,
            author: req.admin && req.admin.email ? req.admin.email : 'Admin', 
        });
        const post = await newPost.save();
        res.status(201).json(post);
    } catch (err) {
        console.error('Error creating blog post:', err.message);
        res.status(500).send('Server Error: Failed to create post.');
    }
};

// @desc    Delete a blog post
// @route   DELETE /api/blog/:id
// @access  Private (Admin)
exports.deleteBlogPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Blog.findByIdAndDelete(postId);

        if (!post) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        res.json({ message: 'Blog post deleted successfully' });
    } catch (err) {
        console.error('Error deleting blog post:', err.message);
        res.status(500).send('Server Error: Failed to delete post.');
    }
};
