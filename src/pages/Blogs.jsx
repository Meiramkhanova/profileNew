import React, { Suspense, useEffect, useState } from "react";
import { lazy } from "react";
import "./Blogs.css";
import Loading from "../components/Loading";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogPost = lazy(() => import("../components/BlogPost"));

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Number of posts per page

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

  const fetchBlogs = () => {
    axios
      .get("http://localhost:8081/api/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log("Error from ShowBlogList");
      });
  };

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8081/api/blogs/${id}`)
      .then((res) => {
        // Refresh the blog list after deletion
        fetchBlogs();
      })
      .catch((err) => {
        console.log("error");
      });
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    const totalPages = Math.ceil(blogs.length / postsPerPage);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <section className="blog" data-page="blog">
        <header>
          <h2 className="h2 article-title">Blog</h2>

          <Link
            to="/createBlog"
            className="create-blog-link"
            style={{
              backgroundColor: "rgb(21,32,43)",
              padding: "13px",
              width: "250px",
              color: "white",
              borderRadius: "8px",
              border: "none",
              marginBottom: "15px",
            }}
          >
            + Create New Blog Post
          </Link>
        </header>
        <div className="blog-posts" style={{ marginBottom: "60px" }}>
          <ul className="blog-posts-list">
            {blogs.length === 0
              ? "No blogs post"
              : currentPosts.map((post, index) => (
                  <BlogPost
                    id={post._id}
                    key={index}
                    title={post.title}
                    category={post.category}
                    date={post.date}
                    imageUrl={post.imageUrl}
                    description={post.description}
                    onDelete={() => onDeleteClick(post._id)}
                  />
                ))}
          </ul>
        </div>
        {/* Pagination */}
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                onClick={() => paginate(currentPage - 1)}
                className="page-link"
              >
                Previous
              </button>
            </li>
            {Array.from(
              { length: Math.ceil(blogs.length / postsPerPage) },
              (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    onClick={() => paginate(index + 1)}
                    className="page-link"
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
            <li
              className={`page-item ${
                currentPage === Math.ceil(blogs.length / postsPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              <button
                onClick={() => paginate(currentPage + 1)}
                className="page-link"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </Suspense>
  );
};

// Add a fixed delay so you can see the loading state
// function delayForDemo(promise) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }

export default Blogs;
