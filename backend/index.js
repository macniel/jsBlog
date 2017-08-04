import * as Model from './models.js';

var app = require('express')();
var ws = require('express-ws')(app);


/**
 * translate the given tag from id to a name
 * @param {string} tagId 
 */
const translateTag = (tagId) => {

}

/**
 * get the blog with all references
 */
app.get('/blog', (req, res) => {
    res.send(blog).end();
});

/**
 * search the blog for a given search string
 */
app.post('/blog/search', (req, res) => {
    const searchQuery = req.query['q'];
});

/**
 * get a list of blog entries
 */
app.get('/blog/entries/', (req, res) => {
    const offset = req.query['offset'];
    const limit = req.query['limit'];
    res.send(blog.entries).end();
});

/**
 * read a blog entry by id
 */
app.get('/blog/entries/:id', (req, res) => {
    const entryId = req.params.id;
});

/**
 * read all comments for a given blog entry by id
 */
app.get('/blog/comments/:entryId', (req, res) => {
    const entryId = req.params.id;
});

/**
 * post a new comment under a given blog entry by id
 */
app.post('/blog/comments/:entryId', (req, res) => {
    const entryId = req.params.id;

});

app.listen(8080);