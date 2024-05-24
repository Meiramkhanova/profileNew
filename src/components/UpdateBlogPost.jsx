import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBlogPost(props) {
  const [blog, setBlog] = useState({
    title: "",
    imageUrl: "",
    date: "",
    description: "",
  });

  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/blogs/${id}`)
      .then((res) => {
        setBlog({
          title: res.data.title,
          imageUrl: res.data.imageUrl,
          date: res.data.date,
          description: res.data.description,
        });
      })
      .catch((err) => {
        console.log("error");
      });
  });

  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: blog.title,
      imageUrl: blog.imageUrl,
      date: blog.date,
      description: blog.description,
    };

    axios
      .put(`http://localhost:8081/api/blogs/${id}`, data)
      .then((res) => {
        navigate(`show-book/${id}`);
      })
      .catch((err) => console.log("Error"));
  };

  return (
    <div>
      <h1>Edit</h1>
      <form noValidate onSubmit={onSubmit}></form>
    </div>
  );
}

export default UpdateBlogPost;
