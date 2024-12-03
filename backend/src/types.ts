
import { z } from 'zod'


export const signupSchema = z.object({
    name: z.string().max(15),
    email: z.string().email(),
    password: z.string().min(4).max(15),
    color: z.string()
})

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4).max(15),
})

export const productSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    image_url: z.string()
})