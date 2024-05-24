import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditBlogPost = () => {
  const { id } = useParams(); // Extract id from URL parameter
  const [blogData, setBlogData] = useState({
    title: "",
    date: "",
    imageUrl: "",
    description: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog post data to edit
    axios.get(`http://localhost:8081/api/blogs/${id}`).then((res) => {
      setBlogData(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      // Handle file input
      if (e.target.files.length > 0) {
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        setBlogData((prevState) => ({
          ...prevState,
          imageUrl: imageUrl,
        }));
      } else {
        setBlogData((prevState) => ({
          ...prevState,
          imageUrl: "", // Clear imageUrl when no file is selected
        }));
      }
    } else if (name === "date") {
      // Handle date input
      // Convert the date string to the ISO format (YYYY-MM-DD) expected by Mongoose
      const isoDate = new Date(value).toISOString();
      setBlogData((prevState) => ({
        ...prevState,
        date: isoDate,
      }));
    } else {
      // Handle other inputs
      setBlogData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    formData.append("title", blogData.title);
    formData.append("description", blogData.description);

    // Check if imageUrl is a string (URL) or an object (file)
    if (typeof blogData.imageUrl === "string") {
      formData.append("imageUrl", blogData.imageUrl); // If imageUrl is a string, directly append it
    } else {
      // If imageUrl is an object (file), append the file itself
      formData.append("imageUrl", blogData.imageUrl);
    }

    axios
      .put(`http://localhost:8081/api/blogs/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for FormData
        },
      })
      .then((res) => {
        navigate(`/blogs`);
      })
      .catch((err) => {
        console.log("Error in UpdateBlogPost!", err);
      });
  };

  return (
    <div className="edit-form">
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleChange}
        />
        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setBlogData((prevState) => ({
              ...prevState,
              imageUrl: e.target.files[0],
            }))
          }
        />
        <label>Description</label>
        <textarea
          name="description"
          value={blogData.description}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};

export default EditBlogPost;
