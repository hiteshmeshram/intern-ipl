"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user1 = yield prisma.user.create({
            data: {
                name: 'user1',
                email: 'user1@gmail.com',
                password: 'Random123',
                color: 'BLUE',
                team: 'MUMBAI_INDIANS'
            }
        });
        const response = yield prisma.product.createMany({
            data: [
                { name: 'Rohits tshirt', description: 'this is dhonis tshirt', price: '9999', image_url: "https://shopthearena.com/cdn/shop/files/MISS24T01-Front_400x.jpg?v=1710854090" },
                { name: 'Sachins tshirt', description: 'this is dhonis tshirt', price: '9999', image_url: "https://shopthearena.com/cdn/shop/products/MI122MJK010-Front_400x.jpg?v=1650958151" },
                { name: 'Sachins cap', description: 'this is dhonis tshirt', price: '9999', image_url: "https://shopthearena.com/cdn/shop/files/60579747-2_400x.jpg?v=1711097242" },
                { name: 'Sachins cap', description: 'this is dhonis tshirt', price: '9999', image_url: "https://shopthearena.com/cdn/shop/products/MI122MJ013-Front_400x.jpg?v=1655366263" },
            ]
        });
    });
}
main();
