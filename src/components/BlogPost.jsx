import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({
  id,
  title,
  category,
  date,
  imageUrl,
  description,
  onDelete,
}) => {
  const fullImageUrl = `http://localhost:8081${imageUrl}`;
  console.log("Image URL:", fullImageUrl);

  return (
    <li className="blog-post-item" style={{ margin: "20px" }}>
      <a href="#">
        <figure className="blog-banner-box">
          {imageUrl ? (
            <img src={fullImageUrl} alt={fullImageUrl} loading="lazy" />
          ) : (
            <div>No image available</div>
          )}
        </figure>
        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{category}</p>
            <span className=""></span>
            <time dateTime={date}>{date}</time>
          </div>
          <h3 className="h3 blog-item-title">{title}</h3>
          <p className="blog-text">{description}</p>
        </div>
      </a>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "5px",
        }}
      >
        <button
          onClick={onDelete}
          style={{
            backgroundColor: "rgb(21,32,43)",
            padding: "13px",
            color: "white",
            borderRadius: "8px",
            border: "none",
          }}
        >
          Delete
        </button>
        <Link
          to={`/edit-blog/${id}`}
          style={{
            backgroundColor: "rgb(21,32,43)",
            padding: "13px",
            color: "white",
            borderRadius: "8px",
            border: "none",
          }}
        >
          Edit
        </Link>
      </div>
    </li>
  );
};

export default BlogPost;
