const { addPost, othersPosts, usersPosts, deleteposts, editPosts, getaPosts, blockPosts } = require("../Controller/postController");

const router = require("express").Router();

// add post
router.route("/add-post").post(addPost);
// get others post
router.route("/getotherspost/:id").get(othersPosts);
// get users post
router.route("/getuserspost/:id").get(usersPosts);
// delete post
router.route("/deletepost/:id").delete(deleteposts);
// edit post
router.route("/editpost/:id").put(editPosts)
// get a post
router.route("/getapost/:id").get(getaPosts)
// block a post
router.route("/blockpost/:id").post(blockPosts)


module.exports = router;