const blogRouter = require('express').Router();

const { getBlog, addBlog } = require('./Blog.controller');

blogRouter.get("/blog", getBlog);
blogRouter.post("/blog", addBlog);

module.exports = {
    blogRouter
}