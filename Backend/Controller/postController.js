const postService = require("../Services/postServices");

// add post
const addPost = async (req, res) => {
  try {
    const desc = req.body.desc;
    const userId = req.body.userId;
    const username = req.body.username;
    console.log(desc,userId,username);

    const post = await postService.adpost(desc, userId, username);

    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// get others post
const othersPosts = async (req, res) => {
  try {
    const userId = req.params.id;

    const post = await postService.othersPost(userId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get user posts
const usersPosts = async (req, res) => {
  try {
    const userId = req.params.id;
    const post = await postService.usersPost(userId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete post
const deleteposts = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postService.deletePost(postId);
    res.status(200).json("post deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

// edit posts
const editPosts = async (req, res) => {
  try {
    const postId = req.params.id;
    const body = req.body;

    const post = await postService.editPost(postId,body);
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// get a Post
const getaPosts =async(req,res) => {
  try {
    const postId =req.params.id
    const post = await postService.getaPost(postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
} 

// block post
const blockPosts = async(req,res) => {
  try {
    const postId = req.params.id;
    const body = req.body;
    console.log("bogg",postId,body);
    const post =await postService.blockPost(postId,body)
    res.status(200).json("post blocked")
  } catch (err) {
    console.log("erre",err);
    res.status(500).json(err);
  }
}

module.exports = { addPost, othersPosts, usersPosts, deleteposts,editPosts,getaPosts,blockPosts };
