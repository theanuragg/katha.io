import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
export const blogRoute = new Hono();
blogRoute.use('/', async (c, next) => {
    const authheader = c.req.header("Authorization");
    const user = await verify(authheader || "", c.env.JWT_SECRET);
    console.log(user);
    if (user) {
        c.set("userId", user);
        next();
    }
    else {
        c.status(403);
        return c.json({ message: "you need to  login" });
    }
});
blogRoute.post("/", async (c) => {
    const authorId = c.get("userId");
    console.log("authorID", authorId);
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    console.log("body", body);
    const post = await prisma.story.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        },
    });
    console.log("postAfterPrisma", post);
    return c.json({
        message: "jdjid"
    });
});
blogRoute.put("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    prisma.story.update({
        where: {
            id: body.id,
        },
        data: {
            title: body.title,
            content: body.content,
        },
    });
    return c.text("updted post");
});
blogRoute.get("/", async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const post = await prisma.story.findFirst({
        where: {
            id: body.id,
        },
    });
    return c.json(post);
});
//pagination
blogRoute.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const posts = await prisma.story.findMany({});
    return c.json(posts);
});
