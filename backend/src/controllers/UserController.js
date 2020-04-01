const User = require("../models/User");
module.exports = {
  async register(req, res, next) {
    try {
      const { username, password } = req.body;
      const userExists = await User.findOne({ username });
      if (userExists) {
        return res.status(400).send({ error: "Username already in use." });
      }
      const user = await User.create({
        username,
        password
      });
      res.status(201).send({
        id: user.id,
        username: user.username
      });
    } catch (err) {
      res.status(400);
      next(err);
    }
  }
};
