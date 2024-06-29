import { Hono } from "hono";
import user from "./user";
import blog from "./blog";

const app = new Hono().basePath("/api/v1");
app.route("/", blog); // Handle /blog
app.route("/", user); // Handle /user

export default app;
