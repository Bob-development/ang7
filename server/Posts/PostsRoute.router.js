const postsRouter = require('express').Router();

const { getPosts, addPost } = require('./Posts.controller');

postsRouter.get("/posts", getPosts);
postsRouter.post("/posts", addPost);

module.exports = {
    postsRouter
}