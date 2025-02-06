import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
import { z } from "zod";
import { createFactory } from "hono/factory";
import { SignupSchema, SigninSchema } from "@theanurag/katha-common";
import { generateToken } from "../Utils/generatetoken";
import bcrypt from "bcryptjs";

const factory = createFactory();

const signupschema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

const signinschema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export const signuphandler = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body: SigninSchema = 
});
