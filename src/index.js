import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blogs";
import Contact from "./pages/Contact";
import CreateBlog from "./components/CreateBlog";
import EditBlogPost from "./pages/EditBlogPost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/createBlog" element={<CreateBlog />} />
      {/* <Route path="/showBlog" element={<ShowBlogList />} /> */}
      {/* <Route path="/show-blog/:id" element={<ShowBlogDetails />} /> */}
      <Route path="/edit-blog/:id" element={<EditBlogPost />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
