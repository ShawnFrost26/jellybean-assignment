const blogRouter = require("express").Router();
const Blog = require('../models/blog.model')
const {getAuth} = require('../middlewares/auth')

const response = (res, status, result) => {
    res.status(status).json(result);
}

blogRouter.get("/", async (req, res) => {
      try {
        const blogs = await Blog.find();
        response(res, 200, blogs);
      } catch (error) {
        response(res, 404, { message: "Could Not Fetch Blogs from DB", error });
      }
    }
) 

blogRouter.post("/create", getAuth, async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const newBlog = new Blog({ title, author, content, user: req.user});
    console.log("newBlog:", newBlog);
    const result = await newBlog.save();
    response(res, 201, { message: "Blog created successfully", blog: result });
} catch (error) {
    response(res, 500, { message: "Failed to create new blog", error });
}
  });


module.exports = blogRouter;