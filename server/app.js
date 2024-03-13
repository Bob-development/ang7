const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

const { postsRouter } = require('./Posts/PostsRoute.router');
const { blogRouter } = require('./Blog/BlogRoute.router');

app.use(cors());
app.use(bodyParser.json())

app.use("", postsRouter);
app.use("", blogRouter);

app.use("/", (req, res) => {
    return res.json({
        message: 'Hello World!'
    })
})

module.exports = {
    app
}