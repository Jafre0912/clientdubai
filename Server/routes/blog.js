// --- Blog Routes ---
const express = require('express');
const router = express.Router();
const { getBlogPosts, createBlogPost, deleteBlogPost } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware'); // Admin protection

// @route   GET api/blog
// @desc    Get all blog posts (Public access)
// @access  Public
router.get('/', getBlogPosts);

// @route   POST api/blog
// @desc    Create new blog post (Admin access)
// @access  Private
router.post('/', protect, createBlogPost);

// @route   DELETE api/blog/:id
// @desc    Delete a blog post (Admin access)
// @access  Private
router.delete('/:id', protect, deleteBlogPost);

module.exports = router;
