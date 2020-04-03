const Post = require("../models/Post");

module.exports = {
  async create(req, res, next) {
    const { title, content } = req.body;
    const post = await Post.create({ owner: req.user._id, title, content });
    if (!post) res.status(400).send({ error: "Unable to create post." });
    res.status(201).send({
      id: post._id,
      owner: post.owner,
      title: post.title,
      content: post.content,
      likes: post.likes
    });
  },
  async delete(req, res, next) {
    const { id } = req.params;
    try {
      await Post.deleteOne({ _id: id });
      res.status(200).send({ message: "Post deleted." });
    } catch (err) {
      res.status(400);
      next(err);
    }
  },
  async likeUnlike(req, res, next) {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);
      if (!post) return res.status(400).send({ error: "Post not found." });
      if (post.owner === req.user._id)
        return res.status(400).send({ error: "Unable to update post." });
      const postAlreadyLiked = post.likes.some(like => like == req.user._id);
      if (postAlreadyLiked) {
        post.likes = post.likes.filter(like => like != req.user._id);
      } else {
        post.likes.push(req.user._id);
      }
      post.save();
      res.status(200).send(post);
    } catch (err) {
      res.status(400);
      next(err);
    }
  },
  async index(req, res, next) {
    try {
      const posts = await Post.find({});
      res.status(200).send(posts);
    } catch (err) {
      res.status(400);
      next(err);
    }
  },
  async findById(req, res, next) {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);
      if (!post) return res.status(400).send({ error: "Post not found." });
      res.status(200).send(post);
    } catch (err) {
      res.status(400);
      next(err);
    }
  }
};
