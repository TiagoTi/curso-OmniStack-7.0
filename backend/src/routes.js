const express = require('express');

const multer = require('multer');

const PostController = require('./controlles/PostController');

const LikeController = require('./controlles/LikeController');

const uploadConfig = require('./config/upload');

const routes = express.Router();

const upload = multer(uploadConfig);


routes.get('/', (req, res) => res.send(`Hello World: ${req.query.name}`));


routes.post('/posts', upload.single('image'), (req, res) => {
  PostController.store(req, res);
});


routes.get('/posts', (req, res) => {
  PostController.index(req, res);
});


routes.post('/posts/:id/likes', (req, res) => {
  LikeController.store(req, res);
});


module.exports = routes;
