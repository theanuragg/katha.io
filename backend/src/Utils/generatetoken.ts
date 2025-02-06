import { Cookie } from "hono/utils/cookie";

import { JWTPayload } from "hono/utils/jwt/types";
import { sign } from "hono/jwt";

export const generateToken = async (
    payload: JWTPayload,
    secret: string
):Promise<string> =>{
    return await sign(payload,secret)
}