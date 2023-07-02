const mongoose = require("mongoose");
const validator = require("validator");

const authorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: (value) => validator.isEmail(value),
    },
    image: { type: String, validate: (value) => validator.isURL(value) },
  },
  { _id: false }
);

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: [authorSchema],
    content: { type: String, required: true, default: "" },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const Blogs = mongoose.model("Blogs", blogSchema);

module.exports = Blogs
