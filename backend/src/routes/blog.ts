import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context, Hono } from "hono";
import { verify } from "hono/jwt";
import { createPostInput, updatePostInput } from "@harshdetroja/common-app";

export const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blog.use("/*", async (c, next) => {
  const jwt = c.req.header("Authorization") || "";

  if (!jwt) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }

  const token = jwt.split(" ")[1];

  const payload = await verify(token, c.env.JWT_SECRET);

  if (!payload) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }

  c.set("userId", payload.id);

  await next();
});

blog.post("/", async (c) => {
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = createPostInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "Invalid input" });
  }
  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });

    return c.json({
      id: post.id,
    });
  } catch (err) {
    c.status(403);
    return c.json({ error: "Blog not posted!" });
  }
});

blog.put("/", async (c) => {
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updatePostInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ error: "Invalid input" });
  }
  try {
    const update = await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      msg: "blog updated!",
    });
  } catch (err) {
    c.status(403);
    return c.json({
      msg: "Update failed!",
    });
  }
});

blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const posts = await prisma.post.findMany();
    return c.json(posts);
  } catch (err) {
    c.status(403);
    return c.json({
      msg: "blogs not found!",
    });
  }
});

blog.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return c.json(post);
  } catch (err) {
    c.status(403);
    return c.json({
      msg: "blog does not exist!",
    });
  }
});
