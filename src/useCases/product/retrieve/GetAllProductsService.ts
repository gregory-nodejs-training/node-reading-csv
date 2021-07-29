import { Product } from "@prisma/client";
import { client } from "../../../database/client";

class GetAllProductsService {

    async execute() : Promise<Product[]> {
        const products = await client.product.findMany();
        return products;
    }
}

export { GetAllProductsService };