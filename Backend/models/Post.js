const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    desc: {
      type: String,
      max: 500,
    },
    blockedUsers: {
      type: Array,
      default:Array,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Post",PostSchema )
