const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/posts", postController.createPost);
router.delete("/deletepost/:postId", postController.deletePost);
router.get("/userposts/:userId", postController.getUserPosts);

module.exports = router;
