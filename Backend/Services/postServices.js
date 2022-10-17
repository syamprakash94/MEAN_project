const Post = require("../models/Post");
const User = require("../models/User")

// addpost
const adpost = async (desc,userId,username) => {
    try {
       const savedPost = new Post(
        {desc:desc,
        userId:userId,
        username:username
        }
        )
       return await savedPost.save()
    } catch (err) {
        throw Error(err);
    }
}

// get others post
const othersPost = async(id) =>{
    try {
        const user = await User.findById(id);
        const blockedUsers = user.blocked;
        // const deactivatedUsers= await User.find({isActive:false})
        // const result = deactivatedUsers.map((user)=>{
        //  return user._id
        // })
        const posts = await Post.find({
          $and: [{ userId: { $ne: id } }, { blockedUsers: { $nin: [id] } },{userId:{$nin:blockedUsers}}]
        }).sort({updatedAt:-1});
        return posts;
    } catch (error) {
        throw Error(err); 
    }
}

// get user posts
const usersPost = async(id) => {
    try {
        console.log(id);
        const post = await Post .find({userId : id })
        return post;
    } catch (error) {
        throw Error(err); 
    }
}

// delete post
const deletePost = async(id) => {
    try {
        const post = await Post.findByIdAndDelete(id)
        if(post){
            return post
        }
    } catch (error) {
        throw Error(error);
    }
}
 
// edit post
const editPost = async(id,body) => {
    try {
 
        const post =await Post.findByIdAndUpdate(id,{ $set : body},{new : true});
        return post;
    } catch (err) {
        throw Error(err); 
    }
}

// get a post
const getaPost =async(id)=> {
    try {
        const post =await Post.findById(id);
        return post
    } catch (err) {
        throw Error(err); 
    }
}

// block post
const blockPost =async(id,userId) =>{
    try {
        console.log("igg",userId);
        const post = await Post.findByIdAndUpdate(id,{$push:{blockedUsers: userId.userId}})
        return post;
    } catch (err) {
        throw Error(err); 
    }
}

module.exports ={adpost,othersPost,usersPost,deletePost,editPost,getaPost,blockPost}