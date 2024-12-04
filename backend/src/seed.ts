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

    const user2 = await prisma.user.create({
        data: {
            name: 'user2',
            email: 'user2@gmail.com',
            password: hashedPassword,
            color: 'YELLOW',
            team: 'CHENNAI_SUPER_KINGS'
        }
    })

    const response = await prisma.product.createMany({
        data: [  
            {name: 'Rohits tshirt',description: 'this is dhonis tshirt',price: '9999',image_url: "https://shopthearena.com/cdn/shop/files/MISS24T01-Front_400x.jpg?v=1710854090"},
            {name: 'Sachins tshirt',description: 'this is dhonis tshirt',price: '9999',image_url: "https://shopthearena.com/cdn/shop/products/MI122MJK010-Front_400x.jpg?v=1650958151"},
            {name: 'Sachins cap',description: 'this is dhonis tshirt',price: '9999',image_url: "https://shopthearena.com/cdn/shop/files/60579747-2_400x.jpg?v=1711097242"},
            {name: 'Sachins cap',description: 'this is dhonis tshirt',price: '9999',image_url: "https://shopthearena.com/cdn/shop/products/MI122MJ013-Front_400x.jpg?v=1655366263"},
            {name: 'dhonis tshirt',description: 'this is dhonis tshirt',price: '9999',team:"CHENNAI_SUPER_KINGS",image_url: "https://www.chennaisuperkings.com/shop/_next/image?url=https%3A%2F%2Fstore.chennaisuperkings.com%2F%2Fmedia%2Fcatalog%2Fproduct%2F%2Fp%2Fr%2Fprcsk24-fanjhs-199-7d_12.jpg&w=1920&q=100"},
            {name: 'raidus tshirt',description: 'this is dhonis tshirt',price: '9999',team:"CHENNAI_SUPER_KINGS",image_url: "https://www.chennaisuperkings.com/shop/_next/image?url=https%3A%2F%2Fstore.chennaisuperkings.com%2F%2Fmedia%2Fcatalog%2Fproduct%2F%2Fc%2Fs%2Fcsk_half_sleeve_1.png&w=1920&q=100"},
            {name: 'dhonis  bottle',description: 'this is dhonis tshirt',price: '9999',team:"CHENNAI_SUPER_KINGS",image_url: "https://www.chennaisuperkings.com/shop/_next/image?url=https%3A%2F%2Fstore.chennaisuperkings.com%2F%2Fmedia%2Fcatalog%2Fproduct%2F%2F8%2F9%2F8905570018603_1.jpg&w=1920&q=100"},
            {name: 'dhonis  cup',description: 'this is dhonis tshirt',price: '9999',team:"CHENNAI_SUPER_KINGS",image_url: "https://www.chennaisuperkings.com/shop/_next/image?url=https%3A%2F%2Fstore.chennaisuperkings.com%2F%2Fmedia%2Fcatalog%2Fproduct%2F%2Fp%2Fr%2Fprcmug-csk-02_1.jpg&w=1920&q=100"},

        ]
    })

}

main();