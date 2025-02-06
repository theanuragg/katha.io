"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var SignupInput = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(3)
});
var SigninInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(3)
});
var storyInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string()
});
