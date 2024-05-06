// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Import comments.js
const comments = require('./comments.js');

// Display all comments
app.get('/comments', (req, res) => {
    res.send(comments.getAllComments());
});

// Add a new comment
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.addComment(comment);
    res.send('Comment added.');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Path: comments.js
// Comments
let comments = [];

// Get all comments
function getAllComments() {
    return comments;
}

// Add a new comment
function addComment(comment) {
    comments.push(comment);
}

// Export functions
module.exports = {
    getAllComments,
    addComment
};

In comments.js, we have two functions: getAllComments() and addComment(). The first function returns all comments, and the second function adds a new comment to the comments array.

In app.js, we import the comments.js file and use the getAllComments() and addComment() functions. We have two routes: /comments and /comments. The first route returns all comments, and the second route adds a new comment.

To run the application, we need to run the following command:

node app.js

Then, we can access the server at http://localhost:3000/comments.

Conclusion

In this article, we discussed how to create a RESTful API with Node.js and Express. We covered the following topics:

- What is a RESTful API
- How to create a simple RESTful API with Node.js and Express
- How to create a RESTful API with multiple routes
- How to create a RESTful API with multiple files

If you have any questions, feel free to ask in the comments below.

#node #node.js #express #restful #api

What is GEEK

Buddha Community

hourly developer
hourly developer 

1599893439

Hire NodeJs Developer

Looking to build dynamic, extensively featured, and full-fledged web applications? **[Hire NodeJs Developer](https://hourlydeveloper.io/hire-dedicated-node-js-developer/ "H
