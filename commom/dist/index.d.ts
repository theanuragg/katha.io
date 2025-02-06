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
export type SignupSchema = z.infer<typeof SignupInput>;
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
export type SigninSchema = z.infer<typeof SigninInput>;
export {};
