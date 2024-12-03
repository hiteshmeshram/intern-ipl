import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash("Random123",10);
    const user1 = await prisma.user.create({
        data: {
            name: 'user1',
            email: 'user1@gmail.com',
            password: hashedPassword,
            color: 'BLUE',
            team: 'MUMBAI_INDIANS'
        }
    })

    const response = await prisma.product.createMany({
        data: [  
            {name: 'Rohits tshirt',description: 'this is dhonis tshirt',price: '9999',image_url: "https://shopthearena.com/cdn/shop/files/MISS24T01-Front_400x.jpg?v=1710854090"},
            {name: 'Sachins tshirt',description: 'this is dhonis tshirt',price: '9999',image_url: "https://shopthearena.com/cdn/shop/products/MI122MJK010-Front_400x.jpg?v=1650958151"},
            {name: 'Sachins cap',description: 'this is dhonis tshirt',price: '9999',image_url: "https://shopthearena.com/cdn/shop/files/60579747-2_400x.jpg?v=1711097242"},
            {name: 'Sachins cap',description: 'this is dhonis tshirt',price: '9999',image_url: "https://shopthearena.com/cdn/shop/products/MI122MJ013-Front_400x.jpg?v=1655366263"},

        ]
    })

}

main();