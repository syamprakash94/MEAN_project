const router = require("express").Router();

const { registerUser, loginUser, editUsers, getusers, blockusers, deactivateUsers, activateUsers } = require("../Controller/userController");

// register user
router.route("/register").post(registerUser);
// login user
router.route("/login").post(loginUser);
// edit user
router.route("/edituser/:id").post(editUsers);
// get a user
router.route("/getauser/:id").get(getusers);
// block users
router.route("/blockuser/:id").post(blockusers);
// deactivate users
router.route("/deactivateuser").put(deactivateUsers);
// activate users
router.route("/activateuser").put(activateUsers)

module.exports = router;
