import React from "react";
import { Link } from "react-router-dom";

function ShowBlogPost({ blog }) {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Blogs"
        height={200}
      />
      <div>
        <h2>
          <Link to={`/show-blog/${blog._id}`}>{blog.title}</Link>
        </h2>
        <p>{blog.description}</p>
      </div>
    </div>
  );
}

export default ShowBlogPost;
