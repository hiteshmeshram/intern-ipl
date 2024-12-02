import express from 'express'
import cors from 'cors'
import { userRouter } from './routes/userRouter';
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client';

export const client  = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/user', userRouter);

app.listen(3000,()=>{
    console.log('server running on port 3000');
})