import { useState } from "react";
import { Button } from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handlePublish = async () => {
    const res = await axios.post(
      "https://backend.deathflick2107.workers.dev/api/v1/blog",
      {
        title: title,
        content: content,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    navigate("/blog");
  };
  return (
    <>
      <div className="flex h-screen items-center">
        <main className="flex-1">
          <section className="container mx-auto py-12 px-4 md:py-16 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Add a New Blog
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  Share your thoughts and insights with the Medium community.
                </p>
              </div>
              <div className="space-y-4  border-[1px] border-neutral-400 rounded-md p-4 ">
                <div className="space-y-1">
                  <label htmlFor="title" className="font-medium">
                    Title
                  </label>
                  <br />
                  <input
                    id="title"
                    type="text"
                    placeholder="Enter blog title"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="w-full p-2 border-[1px] border-neutral-400 rounded-md"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="content" className="font-medium">
                    Content
                  </label>
                  <br />
                  <textarea
                    id="content"
                    rows={8}
                    placeholder="Write your blog post here"
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    className="w-full p-2 border-[1px] border-neutral-400 rounded-md"
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    title="Publish Blog"
                    onClick={handlePublish}
                    className="bg-black text-white p-2 rounded-md"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
