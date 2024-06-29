import { Hono } from "hono";

const blog = new Hono().basePath("/blog");

blog.post("/", (c) => {
  return c.text("blog created ");
});
blog.put("/", (c) => {
  return c.text("blog updated");
});
blog.get("/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("get blog route");
});
blog.get("/bulk", (c) => {
  return c.text("get blog route");
});

export default blog;
