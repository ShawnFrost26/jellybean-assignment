const blogRouter = require("express").Router();
const Blog = require('../models/blog.model')

const response = (res, status, result) => {
    res.status(status).json(result);
}

BlogRouter.get("/", async (req, res) => {
      try {
        const blogs = await Blog.find();
        response(res, 200, blogs);
      } catch (error) {
        response(res, 404, { message: "Could Not Fetch Blogs from DB", error });
      }
    }
) 



module.exports = blogRouter;