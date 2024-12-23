import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");
const route = app.get("/ping", async (c) => c.text("pong", 200));

type AppType = typeof route;
const GET = handle(app);
const POST = handle(app);

export {  GET, POST, type AppType };
