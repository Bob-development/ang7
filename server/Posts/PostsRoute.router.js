const postsRouter = require('express').Router();

const { getPosts } = require('./Posts.controller');

postsRouter.get("/posts", getPosts);

module.exports = {
    postsRouter
}