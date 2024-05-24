import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import { Link } from "react-router-dom";
import ShowBlogPost from "./ShowBlogPost";

function ShowBlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log("Error from ShowBlogList");
      });
  }, []);

  const blogList =
    blogs.length === 0
      ? "there is no blog posts"
      : blogs.map((blog, k) => <ShowBlogPost blog={blog} key={k} />);

  return (
    <div>
      <h1>Blog List</h1>
      <div>
        <Link to="/createBlog"> + Add New Blog</Link>
      </div>
      <div>{blogList}</div>
    </div>
  );
}

export default ShowBlogList;
