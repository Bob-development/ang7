const blogRouter = require('express').Router();

const { getBlog } = require('./Blog.controller');

blogRouter.get("/blog", getBlog);

module.exports = {
    blogRouter
}