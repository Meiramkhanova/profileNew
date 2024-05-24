import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateBlog() {
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    imageUrl: "",
    date: "",
    description: "",
  });

  const onChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/api/blogs", blog)
      .then((res) => {
        setBlog({
          title: "",
        });
        // Push to /
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateBlog!");
      });
  };

  return (
    <div style={{ paddingTop: "200px" }}>
      <form action="" onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={blog.title}
            onChange={onChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateBlog;
