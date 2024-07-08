import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blogs } from "./pages/Blogs";
import { AddBlog } from "./pages/AddBlog";
import { BlogPage } from "./pages/BlogPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/add" element={<AddBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
