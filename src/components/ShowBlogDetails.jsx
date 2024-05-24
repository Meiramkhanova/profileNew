import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ShowBlogDetails() {
  const [blog, setBlog] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/blogs/${id}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => console.log("Error in ShowBlogDetails"));
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8081/api/blogs/${id}`)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const BlogItem = (
    <div>
      <table>
        <tbody>
          <tr>
            <th>1</th>
            <td>Title</td>
            <td>{blog.title}</td>
          </tr>
          <tr>
            <th>2</th>
            <td>image</td>
            <td>{blog.imageUrl}</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Data</td>
            <td>{blog.date}</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Description</td>
            <td>{blog.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <div>{BlogItem}</div>
      <button
        type="button"
        onClick={() => {
          onDeleteClick(blog._id);
        }}
      >
        Delete
      </button>
      <div>
        <Link to={`edit-blog/${blog._id}`}>Edit</Link>
      </div>
    </div>
  );
}

export default ShowBlogDetails;
