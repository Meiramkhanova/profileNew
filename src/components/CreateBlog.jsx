import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("imageUrl", imageUrl); // Field name should match multer configuration
    formData.append("description", description);

    try {
      const res = await axios.post(
        "http://localhost:8081/api/blogs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // After successful creation, navigate to the blog page
      navigate(`/blogs`);
    } catch (error) {
      console.error("Error in CreateBlog!", error);
    }
  };

  return (
    <section className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Создать пост </h2>
      </header>
      <form onSubmit={onSubmit}>
        <input
          style={{ padding: "20px", marginBottom: "15px" }}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название"
        />
        <input
          type="file"
          onChange={(e) => setImageUrl(e.target.files[0])}
          style={{
            padding: "0px",
            marginTop: "32px",
            marginBottom: "25px",
          }}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Описание"
          style={{ padding: "20px", marginBottom: "15px" }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "rgb(21,32,43)",
            padding: "13px",
            color: "white",
            borderRadius: "8px",
            border: "none",
          }}
        >
          Создать
        </button>
      </form>
    </section>
  );
};

export default CreateBlog;
