import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { SECRET } from "../config";

declare global {
    namespace Express {
        interface Request {
            id: number
        }
    }
}

export function userMiddleware(req: Request,res: Response,next: NextFunction) {
    const authHeaders = req.headers['authorization'];
    if(!authHeaders) {
        res.status(411).json({
            message: 'unAuthenticated'
        })
    }

    const token = authHeaders?.split(" ")[1];
    const decoded = jwt.verify(token!, SECRET) as JwtPayload; 
    if (decoded) {
        req.id = decoded.id ;
        next();

    }

}