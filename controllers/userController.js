const User = require("../models/User");

exports.signup = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "User sign-up failed" });
  }
};
