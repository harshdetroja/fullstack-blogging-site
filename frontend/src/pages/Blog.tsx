import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BlogPost } from "../components/BlogPost";

export function Blog() {
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
      <div>
        <div className="space-y-2">
          <h1 className="text-black font-bold text-5xl">Blogs</h1>
          <p className="text-lg">Explore the articles and insights.</p>
        </div>

        <div>
          {loading && <div>Loading...</div>}
          {!loading && <BlogPost blogs={blogs} />}
        </div>
      </div>
    </>
  );
}
