
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

export enum IplTeams {
    MUMBAI_INDIANS = "MUMBAI_INDIANS", 
    DELHI_CAPITALS = "DELHI_CAPITALS",
    ROYAL_CHALLENGERS_BANGALORE = "ROYAL_CHALLENGERS_BANGALORE",
    CHENNAI_SUPER_KINGS = 'CHENNAI_SUPER_KINGS',
    RAJASTHAN_ROYALS = 'RAJASTHAN_ROYALS',
    HYDERABAD = 'HYDERABAD',
    KOLKATA_KINGHT_RIDERS = 'KOLKATA_KINGHT_RIDERS',
    LUCKNOW_SUPER_GIANTS = 'LUCKNOW_SUPER_GIANTS',
  }