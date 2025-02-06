import { z } from "zod";


const SignupInput = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(3)
})
export type SignupSchema =z.infer<typeof SignupInput >

const SigninInput = z.object({
    email: z.string().email(),
    password: z.string().min(3)
})

const storyInput = z.object({
    title: z.string(),
    content: z.string()
})

export type SigninSchema = z.infer<typeof SigninInput>