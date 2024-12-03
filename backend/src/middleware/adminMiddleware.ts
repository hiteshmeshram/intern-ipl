import { NextFunction, Request ,Response} from "express";
import jwt from 'jsonwebtoken'
import { SECRET } from "../config";

export function adminMiddleware(req: Request,res: Response,next: NextFunction) {
    const authHeaders = req.headers['authorization'];
    if(!authHeaders) {
        res.status(404).json({
            message: 'unAuthenticated'
        })
    }

    const token = authHeaders?.split(" ")[1];
    console.log('token')
    try{
        const decoded = jwt.verify(token!,SECRET);
        next();

    } catch(e) {     
        res.status(411).json({
            message: 'unauthorised'
        })
        console.log(e);
    }
   

   
}