const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  async register(req, res, next) {
    try {
      const { username, password } = req.body;
      const userExists = await User.findOne({ username });
      if (userExists) {
        return res.status(400).send({ error: "Username already in use." });
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const user = await User.create({
        username,
        password: hash
      });
      res.status(201).send({
        id: user.id,
        username: user.username
      });
    } catch (err) {
      res.status(400);
      next(err);
    }
  },
  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) return res.status(404).send({ error: "Username not found." });
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(400).send("Invalid password.");
      const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);
      res.header("auth-token", token).send({ token });
    } catch (error) {
      res.status(400);
      next(error);
    }
  }
};
