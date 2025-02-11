import { z } from "zod";

const SignupInput = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(3)
})

const SigninInput = z.object({
    email: z.string().email(),
    password: z.string().min(3)
})

const StoryInput = z.object({
    title: z.string(),
    content: z.string(),
    authorId: z.boolean()
})


const  UpdatestoryInput = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    authotId: z.string()
})

export type UpdatestoryInputSchema =z.infer<typeof UpdatestoryInput>
export type StoryInputSchema = z.infer<typeof StoryInput>
export type SignupSchema =z.infer<typeof SignupInput >
export type SigninSchema = z.infer<typeof SigninInput>