const User = require("../models/User");
const bcrypt = require("bcrypt");
const userService = require("../Services/userServices");
const generateToken = require("../utils/generateToken");

// register user
const registerUser = async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const phonenumber = req.body.phonenumber;
    const dob =req.body.dob;

    const user = await userService.regUser(
      username,
      email,
      password,
      phonenumber,
      dob
    );

    res.status(200).json(user);
  } catch (error) {
   
    res.status(500).json(error);
   
  }
};

//login user

const loginUser = async (req, res) => {
  console.log("hello");
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await userService.logUser(email, password);
    const token = generateToken(user._id);
    console.log(token);
    res.status(200).json({ user, token });
  } catch (error) {
   
    res.status(500).json(error);
  } 
};

// edit user
const editUsers = async(req,res) => {
  try {
   
    const userId =req.params.id
    const body =req.body
    console.log("tttt",body);
const user = await userService.editUser(userId,body)
res.status(200).json(user)
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}


// get a user
const getusers = async(req,res) => {
  try {
    const userId =req.params.id
    const user = await userService.getuser(userId);
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error);
  }
}

// block users
const blockusers =async(req,res)=>{
  try {
    const id =req.params.id
    const userId= req.body.userId
   
    const user =await userService.blockUser(id,userId)
    res.status(200).json("user blocked")
  } catch (error) {
   
    res.status(500).json(error);
  }
}
// deactivate users
const deactivateUsers= async(req,res)=>{
  try {
    const id =req.body.id
    const user = await userService.deactivateUser(id)
  
    res.status(200).json("deactivated")
  } catch (error) {
  
    res.status(500).json(error);
  }

}

// activate users
const activateUsers= async (req,res)=> {
try {
  const id =req.body.id
  const user = await userService.activateUser(id)
  console.log("user",user);
  res.status(200).json("Activated")
} catch (error) {
  res.status(500).json(error);
}
}

module.exports = { registerUser, loginUser,editUsers,getusers,blockusers,deactivateUsers,activateUsers };
