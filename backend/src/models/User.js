const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      max: 1024
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", User);
