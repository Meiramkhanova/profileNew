import React from "react";

const BlogPost = ({
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
    <li className="blog-post-item">
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
      <button onClick={onDelete} className="page-link">
        Delete
      </button>
      <button className="page-link">Edit</button>
    </li>
  );
};

export default BlogPost;
