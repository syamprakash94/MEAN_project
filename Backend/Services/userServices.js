const User = require("../models/User");
const bcrypt = require("bcrypt");

// register user
const regUser = async (name, email, password, phonenumber, dob) => {
  try {
    //generate new password and bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new User({
      username: name,
      email: email,
      password: hashedPassword,
      phonenumber: phonenumber,
      dob: dob,
    });

    return await newUser.save();
  } catch (err) {
    throw Error(err);
  }
};

// login user
const logUser = async (email, password) => {
  try {
    const user = await User.findOne({ email: email });

    if (user && bcrypt.compare(password, user.password)) {
      return user;
    }
  } catch (err) {
    throw Error(err);
  }
};

// edit user
const editUser = async (id, body) => {
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );
    return user;
  } catch (err) {
    throw Error(err);
  }
};

// get a user
const getuser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw Error(err);
  }
};

// block user
const blockUser = async (id, userId) => {
  try {
    const user = await User.findByIdAndUpdate(id, {
      $push: { blocked: userId },
    });
    return user;
  } catch (err) {
    throw Error(err);
  }
};

// de activate user
const deactivateUser = async (id) => {
  try {
    const user = await User.findByIdAndUpdate(id, {
      $set: { isActivate: false },
    });
    return user;
  } catch (err) {
    throw Error(err);
  }
};

// activate user
const activateUser= async (id) => {
  try {
    const user = await User.findByIdAndUpdate(id,{$set: {isActivate:true},})
    return user;
  } catch (err) {
    throw Error(err)
  }
}
module.exports = { regUser, logUser, editUser, getuser, blockUser,deactivateUser,activateUser};
