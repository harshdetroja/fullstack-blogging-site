import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function BlogPage() {
  const [blog, setBlog] = useState({});
  const [load, setLoad] = useState(true);
  const { id } = useParams();

  const getData = useCallback(async () => {
    const res = await axios.get(
      `https://backend.deathflick2107.workers.dev/api/v1/blog/${id}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    setBlog(res.data);
    setLoad(false);
  }, []);

  useEffect(() => {
    getData();
  });

  if (load) {
    return <div className="p-10 text-3xl">Loading...</div>;
  }

  return (
    <>
      <div className="container p-10 space-y-4">
        <h1 className="text-5xl font-bold">{blog.title}</h1>
        <p className="text-xl">{blog.content}</p>
      </div>
    </>
  );
}
