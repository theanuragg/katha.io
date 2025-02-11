import { z } from "zod";
declare const SignupInput: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    email?: string;
    password?: string;
}, {
    name?: string;
    email?: string;
    password?: string;
}>;
declare const SigninInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
}, {
    email?: string;
    password?: string;
}>;
declare const StoryInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    authorId: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    title?: string;
    content?: string;
    authorId?: boolean;
}, {
    title?: string;
    content?: string;
    authorId?: boolean;
}>;
declare const UpdatestoryInput: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    content: z.ZodString;
    authotId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title?: string;
    content?: string;
    id?: string;
    authotId?: string;
}, {
    title?: string;
    content?: string;
    id?: string;
    authotId?: string;
}>;
export type UpdatestoryInputSchema = z.infer<typeof UpdatestoryInput>;
export type StoryInputSchema = z.infer<typeof StoryInput>;
export type SignupSchema = z.infer<typeof SignupInput>;
export type SigninSchema = z.infer<typeof SigninInput>;
export {};
