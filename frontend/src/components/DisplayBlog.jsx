import React from "react";
import BlogCard from "./BlogCard";

const dummyBlogs = [
  {
    _id: "1",
    title: "First Blog",
    content: "This is the content of the first blog.",
    image: "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.2.549498061.1687595530&semt=sph",
    author: [{ name: "Shawn Doe" }],
    createdAt: "2023-07-03T10:00:00.000Z",
  },
  {
    _id: "2",
    title: "Second Blog",
    content: "This is the content of the second blog.",
    image: "https://img.freepik.com/free-photo/miniature-engineer-worker-plug-lan-cable-computer_1252-838.jpg?size=626&ext=jpg&ga=GA1.2.549498061.1687595530&semt=sph",
    author: [{ name: "Mo Smith" }],
    createdAt: "2023-07-02T14:30:00.000Z",
  },
];

const DisplayBlog = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", paddingTop: "2rem" }}>
      {dummyBlogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default DisplayBlog;
