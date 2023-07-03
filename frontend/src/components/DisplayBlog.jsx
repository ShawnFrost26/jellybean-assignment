import { Box } from '@mui/material'
import BlogCard from './BlogCard'

const DisplayBlog = () => {

    const dummyBlogs = [
        {
          _id: 1,
          title: "Dummy Blog 1",
          content: "This is the content of dummy blog 1.",
          image: "https://example.com/image1.jpg",
          author: "John Doe",
          timestamp: "2023-07-03 10:00:00"
        },
        {
          _id: 2,
          title: "Dummy Blog 2",
          content: "This is the content of dummy blog 2.",
          image: "https://example.com/image2.jpg",
          author: "Jane Smith",
          timestamp: "2023-07-03 11:00:00"
        },
      ];

    return (
        <Box sx={{ maxWidth: "600px", display: "flex", flexDirection: "column", margin: "auto", gap: 3, py:2 }}>
            {dummyBlogs.map(blog=>(
                <BlogCard blog={blog} key={blog._id} />
            ))}
        </Box>
    )
}

export default DisplayBlog