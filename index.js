const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
require('dotenv').config()
const app = express();
app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for parsing URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRoutes);
app.use("/api", postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
