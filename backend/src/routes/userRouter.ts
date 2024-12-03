import { Router } from 'express'
import { signinSchema, signupSchema } from '../types'
import { client } from '..'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET } from '../config'
import { assignTeam } from '../assignTeam'
import { userMiddleware } from '../middleware/userMiddleware'

export const userRouter = Router();

userRouter.post('/signup',async (req,res) => {
    const {name, email, password, color} = req.body;

    const parsedData = signupSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.status(404).json({
            message: 'invalid credentails'
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);
    //based on the color i will assign the team to the user
    const assignedTeam = await assignTeam(color);

    try {
        const newUser = await client.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                color,
                team: assignedTeam,
                role: 'USER'
            }
        })

        const token = jwt.sign({
            id: newUser.id,
            role: newUser.role
        },SECRET)

        res.json({
            message: 'user created successfully',
            token,
            team: assignedTeam
        })

    } catch(e) {
        console.log(e);
        res.status(404).json({
            message: 'signup failed'
        })
    }

})

userRouter.post('/signin',async (req,res) => {
    const {email, password} = req.body;
    console.log(email,password)

    const parsedData = signinSchema.safeParse(req.body);
    if(!parsedData.success) {
        res.status(404).json({
            message: 'invalid credentials'
        })
    }

    try {
        const user = await client.user.findUnique({
            where: {
                email
            }
        })

        if(!user) {
            res.status(404).json({
                message: 'no user found with this email'
            });
            return;
        }

        const passwordVerified = await  bcrypt.compare(password, user?.password!)
        if(!passwordVerified) {
            res.status(404).json({
                message: 'incorrect password'
            })
        }

        const token = jwt.sign({
            id: user.id,
            role: user.role
        },SECRET)

        res.json({
            message: 'user logged in successfully',
            token
        })

    } catch(e) {
        console.log(e);
        res.status(404).json({
            message: 'invalid credentials'
        })
    }
})

userRouter.put('/update',userMiddleware,async(req,res)=>{
    const id = req.id;

    try{
        await client.user.update({
            where: {
                id
            },data: req.body
        });

        res.json({
            message: 'user updated successfully'
        })

    } catch(e) {
        console.log(e);
        res.status(404).json({
            message: 'error while updating info'
        })
    }
})

userRouter.get('/me',userMiddleware,async (req,res) => {
    const id = req.id;
    const user = await client.user.findFirst({
        where: {
            id
        },
         select: {
            name: true,
            email: true,
            team: true,
            color: true,
            role: true
        }
    })

    if(user) {
        res.json({user});
    }
})