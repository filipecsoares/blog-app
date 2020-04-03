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
  }
};
