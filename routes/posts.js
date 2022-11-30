const express = require("express")
const router = express.Router()
const Post = require("../models/post")

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

// Creating a post
router.post("/", async (req, res) => {
  const post = new Post({
    name: req.body.name,
    favoriteStrain: req.body.favoriteStrain
  })

  try {
    const newPost = await post.save()
    res.status(201).json(newPost)
  } catch(err) {
    res.status(400).json({message: err.message})
  }
})

module.exports = router