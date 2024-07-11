import { z } from "zod";

export const usernameValiadtion = z
    .string()
    .min(2, "username must be atleast two character")
    .max(20, "Username must not be more than 20 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special character")

export const signUpSchema = z.object({
    username: usernameValiadtion,
    email: z.string().email({ message: 'Invalid Email address' }),
    password: z.string().min(6, { message: 'Password atleast 6 characters' })
})