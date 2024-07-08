import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BlogPost } from "../components/BlogPost";

export function Blogs() {
  const [blogs, setBlogs] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    const res = await axios.get(
      "https://backend.deathflick2107.workers.dev/api/v1/blog/bulk",
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    setBlogs(res.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container p-10">
        <div className="space-y-2">
          <h1 className="text-black font-bold text-6xl">Blogs</h1>
          <p className="text-2xl">Explore the articles and insights.</p>
        </div>

        <div className="mt-10">
          {loading && <div>Loading...</div>}
          {!loading && <BlogPost blogs={blogs} />}
        </div>
      </div>
    </>
  );
}
