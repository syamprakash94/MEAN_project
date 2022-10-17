const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 100,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 4,
    },
    phonenumber: {
      type: Number,
    },
    dob: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
    blocked: {
      type: Array,
      default: Array,
    },
    isActivate:{
      type: Boolean
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
