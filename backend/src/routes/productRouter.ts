
import { Router } from 'express'
import { adminMiddleware } from '../middleware/adminMiddleware';
import { client } from '..';
import { userMiddleware } from '../middleware/userMiddleware';
import { IplTeams } from '../types';

export const productRouter = Router();

productRouter.post('/add',adminMiddleware,async (req,res)=>{
    const {name,description,price,image_url} = req.body;
    try {
        await client.product.create({
            data: {
                name,
                description,
                price,
                image_url
            }
        })

        res.json({
            message: 'product added successfully'
        })

    } catch(e) {
        console.log(e);
        res.status(403).json({
            message: 'error while adding product'
        })
    }
})

productRouter.get('/',adminMiddleware,async (req,res)=> {
    try {
        const products = await client.product.findMany({});
        res.json({products});

    } catch(e) {
        console.log(e);
    }
})

productRouter.get('/:team',userMiddleware,async (req,res)=>{
    const team: IplTeams = req.params.team as IplTeams;
    
    try {
        const products = await client.product.findMany({
            where: {
                team: team
            }
        })
    
        res.json({products});
        
    } catch(e) {
        console.log(e);
        res.status(404).json({
            message: "no products found please add products"
        })
    }
    
})

productRouter.put('/edit/:id',adminMiddleware,async (req,res)=>{
    const id = req.params.id;
    

    try {
        await client.product.update({
            where: {
                id: Number(id)
            },
            data: req.body
        })

        res.json({
            message: 'product updated successfully'
        })

    } catch(e) {
        console.log(e);
        res.status(403).json({
            message: 'error while editing the product'
        })
    }
})

productRouter.delete('/delete/:id',adminMiddleware,async (req,res)=>{
    const id = req.params.id;
    try {
        await client.product.delete({
            where: {
                id: Number(id)
            }
        })
        res.json({
            message: 'product deleted successfully'
        })
    } catch(e) {
        console.log(e);
        res.status(404).json({
            message: 'error while deleting'
        })
    }
})