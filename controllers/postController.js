const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { userId, content } = req.body;
    const post = new Post({ userId, content });
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Post creation failed" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const {postId} = req.params;
    await Post.findByIdAndDelete({_id:postId});
    res.status(200).json({message:"Successful post deletion."});
  } catch (error) {
    res.status(500).json({ error: "Post deletion failed" });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await Post.find({ userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user's posts" });
  }
};
